var sum = 0 ;
// for(var i = 0 ; i < 1000000000 ; i++){}
function ajax(id,type) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://source.unsplash.com/400x300?"+type, true);
  xhr.responseType = "json";
  xhr.onload = function (e) {
      if (this.status == 200) {
      document.getElementById(id).src=this.responseURL;
  }
  };
  xhr.send();
}
ajax("test",4);
ajax("test2",5); 

