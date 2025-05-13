// Set default state when extension is installed
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({enabled: false}, function() {
      console.log('Extension is disabled by default');
    });
  });
  
  // Listen for messages from popup
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'enable') {
      console.log('Extension enabled from popup');
      // You can add additional background functionality here
    } else if (request.action === 'disable') {
      console.log('Extension disabled from popup');
      // You can add cleanup code here
    }
  });