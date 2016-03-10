document.addEventListener("DOMContentLoaded", function(event) {

	var images = [
		"img/80450_fleurdelis_lg.gif"
		"img/angels-1493731.jpg"
		"img/black laurel wreath.jpg"
		"img/Fleur_de_Lis_Logo__00608.1443214471.1280.1280.jpg"
		"img/fleur-de-lis-001.jpg"
		"img/fleur1.jpg"
		"img/fleurandlaurel.jpeg"
		"img/vgosn_vintage_wreath_clip_art_image.jpg"
	];

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