var el;
var feed = []; // empty array
var numFood = 10;



function setup() {
	createCanvas(640, 480);
	el = new Elephant();
	
	// initializing 10 pieces of food
	for(var i = 0; i < numFood; i++) {
		feed.push(new Food(random(width), random(height)));
	}
}

function draw() {
	background(0, 255, 0);
	el.display();
	
	//display all the food
	for(var i = 0; i < numFood; i++) {
		feed[i].display();
	}
}

function mousePressed() {
	el.eat();
}

function Food(x, y){
	this.x = x;
	this.t = y;
	this.color = color(255, 0, 0);
	this.foodSize = 50;
	
	this.display = function() {
		fill(this.color);
		ellipse(this.x, this.y, this.foodSize, this.foodSize)
	}
}


function Elephant() {
	//instant variable
	var x = mouseX;
	var y = mouseY;
	var diameter = 200;
	
	this.getDistance = function(other) {
		var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));		
		return dist;
	}
	
	

	this.display = function() {
		background('#FFFAED');
	
		//earRight
		fill('#808080');
		push();
		translate(x+100, y-50);
		rotate(-Math.PI / 4);
		ellipse(0, 0, 150, 200);
		pop();

		//earLeft
		fill('#808080');
		push();
		translate(x-100, y-50);
		rotate(Math.PI / 4);
		ellipse(0, 0, 150, 200);
		pop();
		
		//face
		noStroke();
		fill('#808080');
		ellipse(x, y, 200, 200);
		
		//nose
		fill('#000000');
		rect(x-30, y+15, 64, 200);
		fill('#C4C5CB');
		ellipse(x, y+215, 70, 70);
		
		//eyeLeft
		fill('#FFFFFF');
		ellipse(x+42, y-26, 64, 64);
		
		//pupilLeft
		fill('#7FC35E');
		ellipse(x+42, y-26, 40, 40);
		
		//eyeRight
		fill('#FFFFFF');
		ellipse(x-42, y-26, 64, 64);
	
		//pupilRight
		fill('#7FC35E');
		ellipse(x-42, y-26, 40, 40);	
		};
	
 	}
 