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
	for(var i = 0; i < feed.length; i++) {
		feed[i].display();
	}
}

function mousePressed() {
	el.eat();
}

function Food(x, y){
	// keyword this
	//makes variables public on the object
	
	//public instance variable
	this.x = x;
	this.y = y;
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
	
	this.eat = function() {
		for(var i = 0; i < feed.length; i++){
			var food = feed[i];
			var d = this.getDistance(food);
			var r1 = food.foodSize / 2;
			var r2 = diameter / 2;
			if(r1 + r2 > d) {
				feed.splice(i, 1);
				feed.push(new Food(random(width), random(height)));
			}
		}
	};
	
	

	this.display = function() {
		x = mouseX;
		y = mouseY;
		
		
	
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
		rect(x-30, y+15, 64, 130);
		fill('#C4C5CB');
		ellipse(x, y+145, 70, 70);
		
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
 