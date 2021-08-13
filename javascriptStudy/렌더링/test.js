var sum = 0;
for (var i = 0; i < 1000000000; i++) {
  sum = i;
}
console.log(sum);

function getImg() {
  document.getElementById("test").src = "./images/render/test4.jpg?33";
}
function getImg2() {
  document.getElementById("test2").src = "./images/render/test5.jpg?22";
}

getImg();
getImg2();

// window.addEventListener("load", function () {
//   for (var i = 0; i < 1000000000; i++) {
//     sum = i;
//   }
// });

// window.addEventListener("DOMContentLoaded", function () {
//   for (var i = 0; i < 1000000000; i++) {
//     sum = i;
//   }
// });
