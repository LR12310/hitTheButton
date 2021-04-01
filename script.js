var button = document.getElementById("button");
var img = document.getElementById("img");

button.addEventListener("click", show);

img.style.display = "none"
img.style.height = window.screen.height

function show() {
  console.log('done')
  button.remove()
  img.style.display = "block"
}