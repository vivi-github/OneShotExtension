whale.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
      message.innerText = request.source;
    }
  });
  
  function onWindowLoad() {
  
    var message = document.querySelector('#message');
    whale.tabs.executeScript(null, {
      file: "getPagesSource.js"
    }, function() {
      // If you try and inject into an extensions page or the webstore/NTP you'll get an error
      if (whale.runtime.lastError) {
        message.innerText = 'There was an error injecting script : \n' + whale.runtime.lastError.message;
      }
    });
  
  }
  

  whale.sidebarAction.onClicked.addListener(function (){

    document.readyState = onWindowLoad();

  });

  

  

