
/*
function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  ele.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
*/

//image load
var bow = new Image();
bow.src = 'img/bow.png';

window.addEventListener("DOMContentLoaded",game);

function game() {

    //Canvas settings
    var canvas = document.getElementById('canvas');
    var ctx    = canvas.getContext('2d');
    var cH     = ctx.canvas.height = window.innerHeight;
    var cW     = ctx.canvas.width  = window.innerWidth;
    
    //Game settings
    var record = 0;
    var target = 0;
    var count  = 0;
    
    
    function bow() {
        ctx.save();
        ctx.fillStyle = 'white';
        
        ctx.arc(
        	(cW/2),
        	(cH/2),
        	100,
        	0,
        	Math.PI * 2
        );
        //ctx.fill();
        
        //static
        
        ctx.drawImage(this.bow, cW/2, cH/2, 50, 16);
        
    }

	  function new_arrow() {
    
	  }
	  
	  function start() {
        bow();
        
        //Record tab
        ctx.font = "20px Verdana";
        ctx.fillStyle = "white";
        ctx.textBaseline = 'middle';
        ctx.textAlign = "left";
        ctx.fillText('Record: '+record+' ', 20, 30+60);
        
        
    }
	  
	  function init() {
	  	window.requestAnimationFrame(init);
	  	start();
	  }
	  
	  init();
}