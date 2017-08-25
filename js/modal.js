var modal = document.getElementById('myModal');

var imgs = document.getElementById("img-gallery").querySelectorAll("img");

for (var i = 0; i < imgs.length; i++) {
  var img = imgs[i];
  img.onclick = function () {
    modal.style.display = "block";
  }
}

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
}
