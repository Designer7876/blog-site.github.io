
var canvas = document.getElementById("cvs");
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext("2d");

var percent = 90;

ctx.beginPath();
ctx.arc(innerWidth/2, innerHeight/2, 100, 0, Math.PI * 2);
ctx.strokeStyle = "#111";
ctx.lineWidth = 20;
ctx.stroke();
ctx.closePath();

var angle = percent/100 * 360;
ctx.beginPath();
ctx.arc(innerWidth/2, innerHeight/2, 100, -90 * Math.PI/180, (angle - 90) * Math.PI/180);
ctx.strokeStyle = "#fff";
ctx.lineWidth = 20;
ctx.stroke();
ctx.closePath();

ctx.textBaseline = "middle";
ctx.textAlign = "center";
ctx.font = "40px arial bold";
ctx.fillStyle = "#fff"
ctx.fillText(percent + "%", innerWidth/2, innerHeight/2);