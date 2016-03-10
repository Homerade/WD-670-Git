document.addEventListener("DOMContentLoaded", function(event) {

	var img1 = document.createElement("img");
	img1.src = img/80450_fleurdelis_lg.gif;

	var img2 = document.createElement("img");
	img1.src = img/angels-1493731.jpg

	var img3 = document.createElement("img");
	img1.src = img/black laurel wreath.jpg
	
	var img4 = document.createElement("img");
	img1.src = img/Fleur_de_Lis_Logo__00608.1443214471.1280.1280.jpg
	
	var img5 = document.createElement("img");
	img1.src = img/fleur-de-lis-001.jpg
	
	var img6 = document.createElement("img");
	img1.src = img/fleur1.jpg
	
	var img7 = document.createElement("img");
	img1.src = img/fleurandlaurel.jpeg
	
	var img8 = document.createElement("img");
	img1.src = img/vgosn_vintage_wreath_clip_art_image.jpg


	var imgGrid = document.querySelector(".photoBox");

	for (var i=0; images.length; i++){
		var newDiv = document.createElement("div");
		newDiv.className = "container";
		newDiv.innerHTML = images[i];
		imgGrid.appendChild(newDiv);
	}

	// var imgGrid = document.querySelector(".imgBlock");

	// //could also use document.body.children.children? (somehow access imgBlock children)
	// var images = imgBlock.children 

	// for (var i=0; i < images.length; i++){
	// 	var newDiv = document.createElement("div");
	// 	newDiv.className = "container"
	// 	newDiv.innerHTML = images[i];
	// 	imgGrid.appendChild(newDiv);

	// }
});	