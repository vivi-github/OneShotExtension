

// 다운로드 링크를 받아오는 함수.
whale.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
      message.innerText += request.source+'\n';
      var str = new String("Hello world");
      var URLstring = new String(request.source +'');
      getlink.innerHTML = str.link(URLstring);
      // 이렇게 URL 받아서 실행하면 다운로드 진행됨.
      // whale.downloads.download({
      //   url: URLstring+''
      //     });
    }
  });
  
  
  // getlongURL을 실행 시키면 새로운 탭을 생성한다.
  whale.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getlongURL") {
      whale.tabs.create({url: request.source}, (tab) => whale.tabs.executeScript(tab.id, {code: "alert('execute!');"}));
    }
  });

  function onWindowLoad() {
  
    var message = document.querySelector('#message');
    var getlink = document.querySelector('#getlink');
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



  

