document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const statusText = document.getElementById('status');
    
    // Get the current state from storage
    chrome.storage.local.get(['enabled'], function(result) {
      toggleSwitch.checked = result.enabled === true;
      updateStatusText(result.enabled === true);
    });
    
    // Add event listener for toggle switch
    toggleSwitch.addEventListener('change', function() {
      const isEnabled = toggleSwitch.checked;
      
      // Save state to storage
      chrome.storage.local.set({enabled: isEnabled}, function() {
        console.log('Extension is ' + (isEnabled ? 'enabled' : 'disabled'));
      });
      
      // Update status text
      updateStatusText(isEnabled);
      
      // Send message to content script
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: isEnabled ? 'enable' : 'disable'});
      });
      
      // Send message to background script
      chrome.runtime.sendMessage({action: isEnabled ? 'enable' : 'disable'});
    });
    
    function updateStatusText(isEnabled) {
      statusText.textContent = isEnabled ? 'Extension is active' : 'Extension is inactive';
    }
  });