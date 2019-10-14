var $canvas = document.querySelector("canvas");
var ctx = $canvas.getContext("2d");

var img = new Image();
img.src = "./img/style01_bg.webp";
img.onload = function() {
  setTimeout(() => {
    ctx.drawImage(this, 0, 0);
    ctx.font = "60px pixel";
    ctx.fillStyle = "#000";
    ctx.globalAlpha = 0.7;
    ctx.translate($canvas.width / 2, $canvas.height / 2);
    ctx.rotate((Math.PI / 180) * 9.5);
    ctx.fillText("汉体书写", -320, -80);
  }, 2000);
};
