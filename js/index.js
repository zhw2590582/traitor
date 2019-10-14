var $canvas = document.querySelector("canvas");
var ctx = $canvas.getContext("2d");

var bgImg = new Image();
bgImg.src = "./img/style01_bg.webp";
bgImg.onload = function() {
  setTimeout(() => {
    darw("诺基亚短信");
  }, 3000);
};

var test = new Image();
test.src = "./img/alipay.jpg";

function darw(text) {
  $canvas.style.letterSpacing = "5px";
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  ctx.drawImage(bgImg, 0, 0);
  ctx.font = "60px pixel";
  ctx.fillStyle = "#000";
  ctx.translate($canvas.width / 2, $canvas.height / 2);
  ctx.rotate((Math.PI / 180) * 9.5);
  ctx.fillText(text, -320, -80);
  ctx.globalCompositeOperation = "overlay";
  ctx.globalAlpha = 0.75;
  ctx.translate(-$canvas.width / 2, -$canvas.height / 2);
  ctx.rotate(-(Math.PI / 180) * 9.5);
  ctx.drawImage(bgImg, -90, 80);
}
