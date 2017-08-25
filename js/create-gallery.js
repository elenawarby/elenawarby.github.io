// ------------------------------------------------
// dynamic image gallery creation. call in html - createGallery(id, img_paths)
// ------------------------------------------------

var slideIndex = 1;

// parameters = identification, array of image names
function createGallery(id, img_paths, img_captions) {
  // create container DIV
  var gallery_container = document.createElement("DIV");
  gallery_container.className = "img-gallery";
  gallery_container.id = id;

  var pos_indicator = document.createElement("DIV");
  pos_indicator.className = "position-indicator";

  var prev_button = document.createElement("A");
  prev_button.onclick = function () {
    plusDivs(-1, id);
  }
  prev_button.textContent = "prev";

  var next_button = document.createElement("A");
  next_button.onclick = function () {
    plusDivs(1, id);
  }
  next_button.textContent = "next";

  var gal_pos = document.createElement("SPAN");
  gal_pos.id = id + "-position";

  var sep1 = document.createElement("SPAN");
  sep1.textContent = " - ";
  var sep2 = document.createElement("SPAN");
  sep2.textContent = " | ";

  // append children to position indicator
  pos_indicator.appendChild(prev_button);
  pos_indicator.appendChild(sep1);
  pos_indicator.appendChild(next_button);
  pos_indicator.appendChild(sep2);
  pos_indicator.appendChild(gal_pos);

  gallery_container.appendChild(pos_indicator);

  img_paths.forEach(function (path) {
    var img = document.createElement("img");
    img.className = id + "-item";
    img.className += " modal-content";
    img.src = path;
    gallery_container.appendChild(img);
  });

  document.getElementById("myModal").appendChild(gallery_container);

  showDivs(slideIndex, id);
}

function plusDivs(n, id) {
  showDivs(slideIndex += n, id);
}

function showDivs(n, id) {
  var i;
  var x = document.getElementsByClassName(id + "-item");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";

  updateCaption(slideIndex);

  var pos = document.getElementById(id + "-position");
  pos.innerHTML = slideIndex + "/" + getNumElements(id);
}

function updateCaption(n) {
  var caption = document.getElementById('caption');
  caption.innerHTML = japan_gallery_captions[n - 1];
}

function getNumElements(parent_id) {
  return document.getElementById(parent_id).querySelectorAll("img").length;
}
