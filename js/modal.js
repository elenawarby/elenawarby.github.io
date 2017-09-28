var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var imgs = document.getElementsByClassName("img-gallery")[0].querySelectorAll("img");
var captionText = document.getElementById("caption");

for (var i = 0; i < imgs.length; i++) {
  var img = imgs[i];
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
}
