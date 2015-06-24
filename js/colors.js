var n = 200;
var m = -2000;
var width = $(window).width();
function logM() {
  console.log("n = " +n + '; ' + 'm = '+ m);
}
function drawGradient(color,x,y,r){
  var ctx = document.getElementById('canvas').getContext('2d');
  var grd = ctx.createRadialGradient(x, y, 0, x, y, r);
  grd.addColorStop(0, "rgba("+color+", .6)"); 
  grd.addColorStop(1, "rgba("+color+", 0)");
  ctx.fillStyle = grd
  ctx.fillRect(-150, -150, 2000, 750);
  if (n < 5000){
    n += 1;
  } else {
    n = 0;
  }
  if (m < 5000){
    m += 1;
  } else {
    m = 0; 
  }
}
function clearCanvas(ctx){
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(-150, -150, 2000, 750); // clear canvas
};

// redHalo.addColorStop(1, "rgba(224, 119, 88, 0)");
function init(){
  window.requestAnimationFrame(draw);
}
function draw(){
  var ctx = document.getElementById('canvas').getContext('2d');
  clearCanvas(ctx);
  drawGradient("224, 88, 212", (-700 + n/1.8), (200+n/8), 700); //pink
  drawGradient("221, 224, 88", 650, (-800 + n/2), 700); //yellow
  drawGradient("88, 224, 187", (2000 - n/2), (-250+n/3), 350); //greem
  drawGradient("126, 166, 237", 200, (-400 + n/3), 350); //lightblue
  //drawGradient("75, 98, 129", 1000, (-900 + n/2.5), 450); //darkblue
  
  //drawGradient("224,119,88", 250, (-500 + m/2), 600) //red
  drawGradient("224, 88, 212", (-450 + m/1.8), (-400+m/7), 700); //pink left
  drawGradient("75, 98, 129", (2350 - m/3), (-100 + m/3.5), 450); //pink right
  drawGradient("88, 224, 187", (200 + m/3), (-600 + m/3.5), 750); //green
  //
  // 4000 - -2500 = 6500
  // 4000 - -1000 = 5000
  // 4000 - 0 = 4000 // 2500 units
  // 4000 - 900 = 3100 // 3400 units
  
  window.requestAnimationFrame(draw);
}
init();