
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
    
    /* Version A.
     * Only with 'onmousedown' in 'legal' space,the bow would not change.
     * Weapon position: In the middle of webpage(client measure).
     * Once 'mousedown',catch (X,Y),return data,stop processing until 'mouseup'.
     * Version B.
     * Always follow your mouse(Obviously on PC).Probably.
     */
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
    
    /* Display new arrows,like bullet.
     * After 'mousedown' & 'mouseup',create arrow[index].
     * Then make it run with the gravity system.(Seems need plugin or physics engine)
     */
	  function new_arrow() {
    
	  }
	  
	  /* Once hit,record add.
	   * Piece of stone/earth/plant with grass(element from game M).
	   * Try to put it on a single motion track.Pendulum/Linear motion.
	   */
	  function hitPlant() {
	  	
	  }
	  
	  // As for the dynamic movement,here is the function.
	  function move(m) {
	  	
	  }
	  
	  /* Previously,the game might not launch in a single view.Like pause and reset.
	   * So,I let it start by a 'switch',although it just a function.
	   */
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