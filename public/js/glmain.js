var positionsAttribIndex = 0;
var gl = null;

function setupWebGL() {
	var canvas = document.getElementById("canvas");
	canvas.setAttribute('width', window.innerWidth);
	canvas.setAttribute('height', window.innerHeight);
	gl = canvas.getContext("webgl");
}

function setupWhatToDraw() {
	var positions = [
		0.0, 0.0,
		1.0, 0.0,
		0.0, 1.0
	];

	var typedPositions = new Float32Array(positions);
	var positionsBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, positionsBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, typedPositions, gl.STATIC_DRAW);

	gl.enableVertexAttribArray(positionsAttribIndex);
	gl.vertexAttribPointer(positionsAttribIndex, 2, gl.FLOAT, false, 0, 0);
}


function setupHowToDraw() {
	//vertex shader
	var vsSource = "\
	attribute vec2 aPosition;				\n\
								\n\
	void main(void)						\n\
	{							\n\
		gl_Position = vec4(aPosition, 0.0, 1.0);	\n\
	}							\n\
	";

	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShader, vsSource);
	gl.compileShader(vertexShader);

	//fragmentShader
	var fsSource = "\
	void main(void)						\n\
	{							\n\
		gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);	\n\
	}							\n\
	";
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShader, fsSource);
	gl.compileShader(fragmentShader);

	//program
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.bindAttribLocation(program, positionsAttribIndex, "aPosition");
	gl.linkProgram(program);
	gl.useProgram(program);
}

function draw() {
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
}


function helloDraw() {
	setupWebGL();
	setupWhatToDraw();
	setupHowToDraw();
	draw();
}


window.onload = helloDraw;
