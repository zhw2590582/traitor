var $canvas = document.querySelector("canvas");
var ctx = $canvas.getContext("2d");

var img = new Image();
img.src = "./img/style01_bg.webp";
img.onload = function() {
  ctx.drawImage(this, 0, 0);
};
