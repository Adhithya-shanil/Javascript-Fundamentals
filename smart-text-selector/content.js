// Global variables
let isExtensionEnabled = false;
let pageContent = '';
let selectedText = '';
let popup = null;

// Initialize extension
function initExtension() {
  // Check if extension is enabled in storage
  chrome.storage.local.get(['enabled'], function(result) {
    isExtensionEnabled = result.enabled === true;
    
    if (isExtensionEnabled) {
      // Capture the entire page content
      capturePageContent();
      
      // Set up event listeners
      setupEventListeners();
    }
  });
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'enable') {
    isExtensionEnabled = true;
    capturePageContent();
    setupEventListeners();
  } else if (request.action === 'disable') {
    isExtensionEnabled = false;
    removeEventListeners();
    removeHighlights();
    if (popup) {
      document.body.removeChild(popup);
      popup = null;
    }
  }
});

// Capture all text content from the page
function capturePageContent() {
  // For regular websites
  pageContent = document.body.innerText;
  
  // For PDFs - check if it's a PDF viewer page
  const pdfElements = document.querySelectorAll('.textLayer');
  if (pdfElements.length > 0) {
    let pdfText = '';
    pdfElements.forEach(element => {
      pdfText += element.innerText + ' ';
    });
    pageContent = pdfText.trim();
  }
}

// Set up event listeners
function setupEventListeners() {
  document.addEventListener('mouseup', handleTextSelection);
  document.addEventListener('click', handleDocumentClick);
}

// Remove event listeners
function removeEventListeners() {
  document.removeEventListener('mouseup', handleTextSelection);
  document.removeEventListener('click', handleDocumentClick);
}

// Handle text selection
function handleTextSelection(event) {
  if (!isExtensionEnabled) return;
  
  const selection = window.getSelection();
  selectedText = selection.toString().trim();
  
  if (selectedText) {
    // Highlight the selected text
    highlightSelection(selection);
    
    // Show the popup
    showPopup();
  }
}

// Handle document click (to dismiss popup when clicking outside)
function handleDocumentClick(event) {
  if (!isExtensionEnabled || !popup) return;
  
  // Check if click is outside the popup
  if (!popup.contains(event.target)) {
    document.body.removeChild(popup);
    popup = null;
  }
}

// Highlight selected text
function highlightSelection(selection) {
  removeHighlights();
  
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.className = 'smart-selector-highlight';
    
    try {
      range.surroundContents(span);
    } catch (e) {
      console.error('Could not highlight selection:', e);
    }
  }
}

// Remove all highlights
function removeHighlights() {
  const highlights = document.querySelectorAll('.smart-selector-highlight');
  
  highlights.forEach(highlight => {
    const parent = highlight.parentNode;
    while (highlight.firstChild) {
      parent.insertBefore(highlight.firstChild, highlight);
    }
    parent.removeChild(highlight);
  });
}

// Show the popup with the selected text
function showPopup() {
  // Remove existing popup if present
  if (popup) {
    document.body.removeChild(popup);
  }
  
  // Create popup
  popup = document.createElement('div');
  popup.className = 'smart-selector-popup';
  popup.innerHTML = `
    <div class="smart-selector-popup-header">Ask about this text</div>
    <div class="smart-selector-selected-text">${selectedText}</div>
    <div class="smart-selector-prompt-container">
      <textarea class="smart-selector-prompt-input" placeholder="Ask a question about this text..."></textarea>
    </div>
    <div class="smart-selector-loading">
      <div class="smart-selector-loading-spinner"></div>
      <div>Generating response...</div>
    </div>
    <div class="smart-selector-response-container"></div>
    <div class="smart-selector-popup-footer">
      <button class="smart-selector-submit-button">Submit</button>
    </div>
  `;
  
  // Add to document
  document.body.appendChild(popup);
  
  // Show the popup with a fade-in effect
  setTimeout(() => {
    popup.style.display = 'block';
  }, 0);
  
  // Add event listener to submit button
  const submitButton = popup.querySelector('.smart-selector-submit-button');
  submitButton.addEventListener('click', handleSubmit);
  
  // Focus on the textarea
  const promptInput = popup.querySelector('.smart-selector-prompt-input');
  promptInput.focus();
}

// Handle submit button click
function handleSubmit() {
  const promptInput = popup.querySelector('.smart-selector-prompt-input');
  const promptText = promptInput.value.trim();
  
  if (!promptText) {
    alert('Please enter a prompt');
    return;
  }
  
  // Show loading indicator
  const loadingElement = popup.querySelector('.smart-selector-loading');
  loadingElement.style.display = 'block';
  
  // Prepare the API request
  processWithGemini(promptText);
}

// Process the prompt with Gemini API
function processWithGemini(prompt) {
  // You'll need to sign up for a Gemini API key and add it here
  const API_KEY = 'AIzaSyAq_cLSnLsGhT5LEPRQCAFKOVPw1LWl9FE'; // Replace with your Gemini API key
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
  
  const requestBody = {
    contents: [{
      parts: [{
        text: `Page Context: ${pageContent}\n\nSelected Text: ${selectedText}\n\nPrompt: ${prompt}`
      }]
    }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024
    }
  };
  
  fetch(`${API_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => response.json())
  .then(data => {
    // Hide loading indicator
    const loadingElement = popup.querySelector('.smart-selector-loading');
    loadingElement.style.display = 'none';
    
    // Show response
    const responseContainer = popup.querySelector('.smart-selector-response-container');
    
    // Extract text from response
    let responseText = '';
    try {
      responseText = data.candidates[0].content.parts[0].text;
    } catch (e) {
      responseText = 'Error processing your request. Please try again.';
      console.error('Error parsing Gemini response:', data);
    }
    
    responseContainer.innerHTML = responseText;
    responseContainer.style.display = 'block';
  })
  .catch(error => {
    // Hide loading indicator
    const loadingElement = popup.querySelector('.smart-selector-loading');
    loadingElement.style.display = 'none';
    
    // Show error
    const responseContainer = popup.querySelector('.smart-selector-response-container');
    responseContainer.innerHTML = 'An error occurred while processing your request. Please try again.';
    responseContainer.style.display = 'block';
    
    console.error('Error calling Gemini API:', error);
  });
}

// Initialize the extension when the content script loads
initExtension();