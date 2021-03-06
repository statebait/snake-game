//The Snake Game

//The Score tracker
var counter = 0;
document.getElementById("counter").innerHTML = `SCORE: ${counter}`;

window.onload = function () {
  canv = document.getElementById("gc");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 15);
};
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;

function game() {
  px += xv;
  py += yv;
  if (px < 0) {
    px = tc - 1;
  }
  if (px > tc - 1) {
    px = 0;
  }
  if (py < 0) {
    py = tc - 1;
  }
  if (py > tc - 1) {
    py = 0;
  }
  ctx.fillStyle = "#1b1b1b";
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = "lime";
  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == px && trail[i].y == py) {
      tail = 5;
      counter = 0;
      document.getElementById("counter").innerHTML = `SCORE: ${counter}`;
    }
  }
  trail.push({ x: px, y: py });
  while (trail.length > tail) {
    trail.shift();
  }

  if (ax == px && ay == py) {
    counter++;
    document.getElementById("counter").innerHTML = `SCORE: ${counter}`;
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }
  ctx.fillStyle = "firebrick";
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
function keyPush(evt) {
  switch (evt.keyCode) {
    // left
    case 37:
      if (xv == 1) {
        break;
      }
      xv = -1;
      yv = 0;
      break;
    // down
    case 38:
      if (yv == 1) {
        break;
      }
      xv = 0;
      yv = -1;
      break;
    //right
    case 39:
      if (xv == -1) {
        break;
      }
      xv = 1;
      yv = 0;
      break;
    //up
    case 40:
      if (yv == -1) {
        break;
      }
      xv = 0;
      yv = 1;
      break;
  }
}
