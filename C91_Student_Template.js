canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1Width = 120;
car1Height = 70;
car1Image = "car1.png";
car1X = 10;
car1Y = 10;

car2Width = 120;
car2Height = 70;
car2Image = "car2.png";
car2X = 10;
car2Y = 100;

backgroundImage = "racing.jpg";

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, fazendo o onload desta variável
	backgroundImgTag.src = backgroundImage;   // carregando a imagem

	car1ImgTag = new Image(); //definindo uma variável com uma nova imagem
	car1ImgTag.onload = uploadcar1; // ajustando uma função, fazendo o onload desta variável
	car1ImgTag.src = car1Image;   // carregando a imagem

	car2ImgTag = new Image(); //definindo uma variável com uma nova imagem
	car2ImgTag.onload = uploadcar2; // ajustando uma função, fazendo o onload desta variável
	car2ImgTag.src = car2Image;   // carregando a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}
function uploadcar2() {
	ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("seta para cima");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("seta para baixo");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("seta para a esquerda");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("seta para a direita");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("tecla W");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("tecla S");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("tecla A");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("tecla D");
		}

		if(car1X > 700){
   console.log("car1");
   document.getElementById('gameStatus').innerHTML = "carro 1 venceu!!!"
		}
		if(car1Y > 500){
			console.log("car2");
			document.getElementById('gameStatus').innerHTML = "carro 2 venceu!!!"
				 }
}

function car1_up() {
    if (car1Y >= 0) {
        car1Y = car1Y - 10;
        console.log("Quando a seta para cima é pressionada, x = " + car1X + "y =  " + car1Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if (car1Y <= 500) {
        car1Y = car1Y + 10;
        console.log("Quando a seta para baixo é pressionada, x = " + car1X + "y =  " + car1Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if (car1X >= 500) {
        car1X = car1X - 10;
        console.log("Quando a seta para esquerda é pressionada, x = " + car1X + "y =  " + car1Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right() {
    if (car1X <= 700) {
        car1X = car1X + 10;
        console.log("Quando a seta para direita é pressionada, x = " + car1X + "y =  " + car1Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


