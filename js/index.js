var $canvas = document.querySelector("canvas");
var ctx = $canvas.getContext("2d");

var bgImg = new Image();
bgImg.src = "./img/style01_bg.webp";
bgImg.onload = function() {
  setTimeout(() => {
    darw("诺基亚短信 TEXT");
  }, 100);
};

var cover = new Image();
cover.src = "./img/cover.png";

function darw(text) {
  $canvas.style.letterSpacing = "6px";
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  ctx.drawImage(bgImg, 0, 0);
  ctx.font = "64px pixel";
  ctx.fillStyle = "#333";
  ctx.translate($canvas.width / 2, $canvas.height / 2);
  ctx.rotate((Math.PI / 180) * 9.5);
  ctx.fillText(text, -320, -80);
  ctx.font = "60px pixel";
  ctx.fillStyle = "#76b8d5";
  ctx.fillText(text.length + '/900', 120, -180);
  ctx.globalCompositeOperation = "darken";
  ctx.globalAlpha = 0.3;
  ctx.translate(-$canvas.width / 2, -$canvas.height / 2);
  ctx.rotate(-(Math.PI / 180) * 9.5);
  ctx.drawImage(cover, -90, 80);
}
