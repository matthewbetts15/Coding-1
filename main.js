function setup() {
	createCanvas(640, 480);
}

function draw() {
	background('#FFFAED');
	var x = mouseX;
	var y = mouseY;
	
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
}