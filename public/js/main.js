window.onload = function() {							//window.onload 等頁面加載完再執行
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		arrawX = width/2,
		arrawY = height/2, 
		angle = 0,
		dx, dy,
		l = 2500,
		sl = 70,
		particles = [],
		numParticles = 100,
		ship = particle.create(width/2, height/2, 0, 0),
		thrust = vector.create(0, 0),
		shipangle = 0,
		turningLeft = false,
		turningRight = false,
		thrusting = false,
		holddown = false;

	for(var i = 0; i < numParticles; i += 1){
		particles.push(particle.create(width/2, height/3, Math.random() * 5  + 1, Math.random() * Math.PI * 2, 0.1))
		
	}

	function wind() {
		context.translate(width/2,height/2);
		for(i = 0; i < 361; i += 10 ){
			context.beginPath();
			context.ellipse(l*Math.cos(i*Math.PI/180), l*Math.sin(i*Math.PI/180), 3000, 200, i * Math.PI/180, 0, 2 * Math.PI);
			context.stroke();
		}

		context.beginPath();
		context.moveTo(sl,sl);
		context.lineTo(-sl,sl);
		context.lineTo(-sl,-sl);
		context.lineTo(sl,-sl);
		context.lineTo(sl,sl);
		context.stroke();
	
		context.translate(-width/2,-height/2);
	}

	function mous() {
		context.translate(width/2,height/2);
		context.save();
		context.rotate(angle);
		context.beginPath();
		context.moveTo(20,0);
		context.lineTo(-20,0);
		context.moveTo(20,0);
		context.lineTo(10,-10);
		context.moveTo(20,0);
		context.lineTo(10,10);
		context.stroke();
		context.restore();
		context.translate(-width/2,-height/2);
	}


	function veloc() {
		for(var i = 0; i < numParticles; i += 1) {
			var p = particles[i];
			p.update();
			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), 4, 0, Math.PI * 2, false);
			context.fill();
		}
	}


	function myship() {
		

		if(turningLeft) {
			shipangle -=0.05;
		}


		if(turningRight) {
			shipangle -=0.05;
		}

		thrust.setAngle(shipangle);

		if(thrusting) {
			thrust.setLength(0.1);
		}
		else {
			if(holddown) {
				ship.velocity.subtractFrom(ship.velocity);
			}
			else {
			thrust.setLength(0);
			}
		}

		ship.accelerate(thrust);
		ship.update();
		
		context.save();
		context.translate(ship.position.getX(), ship.position.getY());
		context.rotate(shipangle);

		context.beginPath();
		context.moveTo(10, 0);
		context.lineTo(-10, -7);
		context.lineTo(-10, 7);
		context.lineTo(10, 0);
		if(thrusting) {
			context.moveTo(-10, 0);
			context.lineTo(-18, 0);
		}

		if(holddown) {
			context.moveTo(-10, 0);
			context.lineTo(-18, 0);
		}

		context.stroke();

		context.restore();

		if(ship.position.getX() > width) {
			ship.position.setX(0);
		}

		if(ship.position.getX() < 0) {
			ship.position.setX(width);
		}

		if(ship.position.getY() > height) {
			ship.position.setY(0);
		}

		if(ship.position.getY() < 0) {
			ship.position.setY(height);
		}



	} 





	render();


	function render() {
		context.clearRect(0,0,width,height);
		myship();
		mous();
		veloc();
		wind();
		requestAnimationFrame(render);
	}
	




	//以下為事件註冊
	document.body.addEventListener("mousemove", function(event) {
		dx = event.clientX - arrawX;
		dy = event.clientY - arrawY;
		angle = Math.atan2(dy,dx);
	});

	document.body.addEventListener("mouseup", function(event) {
		for(var i = 0; i < numParticles; i += 1) {
			var p = particles[i];
			p.position.setX(event.clientX);
			p.position.setY(event.clientY);
			p.velocity.setLength(Math.random() * 5 + 1);
			p.velocity.setAngle(Math.random() * Math.PI * 2);
		}
	});



	document.body.addEventListener("keydown", function(event) {
		switch(event.keyCode) {
			case 38:
				thrusting = true;
				break;
			
			case 37:
				turningLeft = true;
				break;
			
			case 39:
				turningRight = true;
				break;
			
			case 40:
				holddown = true;
				break;

			default:
				break;
		}
	});


	document.body.addEventListener("keyup", function(event) {
		switch(event.keyCode) {
			case 38:
				thrusting = false;
				break;
			
			case 37:
				turningLeft = false;
				break;
			
			case 39:
				turningRight = false;
				break;
			
			case 40:
				holddown = false;
				break;

			default:
				break;
		}
	});

};
