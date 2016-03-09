//button function
	var isPlaying = true;
	
	var dualButton = document.getElementById("button");
	dualButton.addEventListener('click', function(){


		if(isPlaying) {
		document.getElementById("vid").pause();
		isPlaying = false;	
		document.getElementById("button").innerHTML = "Play Video";
		} else {
		document.getElementById("vid").play();
		isPlaying = true;
		document.getElementById("button").innerHTML = "Pause Video";
	}});

//footer interactivity
$(document).ready(function(){
	//hover over and it turns green
	$('#styles').mouseover(function(){   
		$(this).css("background-color", "#00CC99");	
	})
	//click on it and it flashes crimson
	.mousedown(function(){
		$(this).css("background-color", "crimson")
	})
	//flashes back to green after click is done
	.mouseup(function(){
		$(this).css("background-color", "#00CC99")
	})
})