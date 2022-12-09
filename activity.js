$(document).ready(function() {
var cells = document.querySelectorAll("#position td");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    console.log(this.innerHTML);
  });
}
})