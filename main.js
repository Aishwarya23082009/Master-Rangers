var Canvas= new fabric.Canvas("my_canvas");
 block_y=1;
 block_x=1;

block_width = 350;
block_height = 430;

var block_image_object= "";

function new_block(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		block_object=Img;
		block_object.scaleToWidth(block_width);
		block_object.scaleToHeight(block_height);
		block_object.set({
			top:block_y,
			left: block_x
		});
		Canvas.add(block_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		block_x = 5;
			new_block("rr.jpg");
			console.log("r");

	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_block("gr.png");
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_block("yr.png");
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_block("pr.png");
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_block("br.png");
		console.log("blue");
	}
	
}

