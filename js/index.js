var $input = document.querySelector(".input");
var $btn = document.querySelector(".btn");
var $img = document.querySelector(".img");

var $canvas = document.createElement("canvas");
$canvas.width = 800;
$canvas.height = 720;
$canvas.style.display = "none";
document.body.appendChild($canvas);
var ctx = $canvas.getContext("2d");

function loadImg(url) {
  return new Promise(function(resolve) {
    var img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.src = url;
  });
}

function waitForWebfonts(fonts) {
  return new Promise(function(resolve) {
    var loadedFonts = 0;
    for (var i = 0, l = fonts.length; i < l; ++i) {
      (function(font) {
        var node = document.createElement("span");
        node.innerHTML = "giItT1WQy@!-/#";
        node.style.position = "absolute";
        node.style.left = "-10000px";
        node.style.top = "-10000px";
        node.style.fontSize = "300px";
        node.style.fontFamily = "sans-serif";
        node.style.fontVariant = "normal";
        node.style.fontStyle = "normal";
        node.style.fontWeight = "normal";
        node.style.letterSpacing = "0";
        document.body.appendChild(node);
        var width = node.offsetWidth;
        node.style.fontFamily = font;
        var interval;
        function checkFont() {
          if (node && node.offsetWidth != width) {
            ++loadedFonts;
            node.parentNode.removeChild(node);
            node = null;
          }
          if (loadedFonts >= fonts.length) {
            if (interval) {
              clearInterval(interval);
            }

            if (loadedFonts == fonts.length) {
              resolve();
              return true;
            }
          }
        }
        if (!checkFont()) {
          interval = setInterval(checkFont, 50);
        }
      })(fonts[i]);
    }
  });
}

function drawText(text, x, y, maxWidth, lineHeight) {
  let arrText = text.split("");
  let line = "";
  for (let n = 0; n < arrText.length; n++) {
    let testLine = line + arrText[n];
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = arrText[n];
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

Promise.all([
  loadImg("./img/demo.png"),
  loadImg("./img/bg.png"),
  waitForWebfonts(["pixel"])
]).then(function([$demo, $bg]) {
  ctx.drawImage($demo, 0, 0);
  $btn.addEventListener("click", function() {
    var text = $input.value.trim();
    text && darw($bg, text);
  });
});

function darw($bg, text) {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  $canvas.style.letterSpacing = "0.35rem";
  ctx.drawImage($bg, 0, 0);
  ctx.font = "2.8rem pixel";
  ctx.fillStyle = "#333";
  ctx.save();
  ctx.translate($canvas.width / 2, $canvas.height / 2);
  ctx.rotate((Math.PI / 180) * 9.5);
  drawText(text, -240, -60, 460, 60);
  ctx.font = "2.8rem pixel";
  ctx.fillStyle = "#76b8d5";
  ctx.fillText(text.length + "/100", text.length >= 10 ? 65 : 95, -135);
  ctx.restore();
  $img.src = $canvas.toDataURL("image/png");
}
