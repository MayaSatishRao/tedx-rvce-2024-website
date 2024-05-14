
/* ABOUT SECTION */
const tedText = "TED began in 1984 as a conference where Technology, Entertainment and Design converged and today covers almost all topics - from science to business to global issues - in more than 100 languages. TED is a non-profit organisation developed to spreading ideas, usually in the form of short, powerful talks (18 minutes or less) and believes passionately in the power of ideas to change attitudes, lives and ultimately, the world. It is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world."
const tedxText = "The TEDx Program is a local gathering designed to help communities, organisations and individuals to speak conversation and connection through local TED-like experiences. TEDx events are fully planned and coordinated independently, on a community-by-community basis. The content and design of each TEDx event is unique and developed independently but all of them stick to the motto-Ideas worth sharing."
const tedxrvceText = "TEDxRVCE was set up in 2017, with a vision to provide a platform for ground-breaking ideas and innovation, stimulating creativity and free-thinking amongst the student populace pecifically, while also catering to the general public. Into the third year, it also aims at creating an open atmosphere for idea sharing and brainstorming among the youth of tomorrow, ensuring a brighter future"

const about = [tedText,tedxText,tedxrvceText]

const ted = document.getElementById("ted")
const tedx = document.getElementById("tedx")
const tedxrvce = document.getElementById("tedxrvce")

const text = document.getElementById("text")

text.innerHTML = about[0]

ted.addEventListener('click', function() {
    text.innerHTML = about[0]
    ted.classList.add("active")
    if(tedx.classList.length == 2)
        tedx.classList.remove("active")
    if(tedxrvce.classList.length == 2)
        tedxrvce.classList.remove("active")
})

tedx.addEventListener('click', function() {
    text.innerHTML = about[1]
    tedx.classList.add("active")
    if(ted.classList.length == 2)
        ted.classList.remove("active")
    if(tedxrvce.classList.length == 2)
        tedxrvce.classList.remove("active")
})

tedxrvce.addEventListener('click', function() {
    text.innerHTML = about[2]
    tedxrvce.classList.add("active")
    if(ted.classList.length == 2)
        ted.classList.remove("active")
    if(tedx.classList.length == 2)
        tedx.classList.remove("active")
})



const canvas = document.getElementById("waves");
const h = document.querySelector("speaker-heading");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas.width,canvas.height);

let canWidth = canvas.width;
let canHeight = canvas.height;


/*const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 200,
    frequency: 0.01
}

let increment = wave.frequency
function animate() {
  
  c.strokeStyle = "#3399fd"
  c.lineWidth=3;
  wave.amplitude = 200;
  plotSine()

  c.strokeStyle = "#10ab4e"
  c.lineWidth = 2;
  wave.amplitude = 300;
  plotSine()

  increment += wave.frequency
  requestAnimationFrame(animate)
}

function plotSine(){
  c.fillRect(0, 0, canvas.width, canvas.height)

  c.beginPath()
  c.moveTo(0, canvas.height / 2)

  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude)
  }

  c.stroke()
}

animate()*/

function drawSin(a,w,offset,way,color){
	var yPos = canvas.height/2;
	var xAxis = 30;

	var funcGen = function(a, w, offset){
		return function(x){
			return (a * Math.sin(w*x+offset));
		}
	}

	var mySin = funcGen(a, w,offset);

	//StartDraw

	c.beginPath();
	c.moveTo(0,0);
	for(i=0; i<canWidth; i+=canWidth/400){
		c.lineTo(i,mySin(i/xAxis)+yPos);
	}
	if(way){
		c.lineTo(canWidth,0);
		c.lineTo(0,0);
		c.closePath();
		c.fillStyle = color
		c.fill();
	}else{
		c.strokeStyle = color
		c.lineWidth = 4;
		c.stroke();
	}

}


var sp = 0;
function render (){
	c.clearRect(0, 0, canWidth, canHeight);
	sp += 0.03;
	drawSin(200,1,0.6*sp,false,'#465484');
	drawSin(150,0.6,1.5*sp,false,'#EB0028');
	drawSin(100,0.4,1*sp,false,'#DDCB93');
	requestAnimationFrame(render);
}

render();