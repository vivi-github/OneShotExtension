

function inject_html(){

    var getlink = document.querySelector('#getlink');
    var str = new String("Hello world");
    var URL = "http://www.tutorialspoint.com";
   // alert(str.link(URL));
    getlink.innerHTML = str.link(URL);
}





whale.sidebarAction.onClicked.addListener(function (){

    document.readyState = inject_html();

  });