$(document).ready(function(){	

	var video = $('#vid').get(0);
		
	video.play();
		
	video.addEventListener('ended', function(){
		
		$(this).fadeOut(2000);
		$('#img1').fadeIn(4000);
	});

});

//WHAT WORKED:
//bg.innerHTML = img1; (no styling)
//img1.innerHTML = "<[display:none removed]>; (video still there as well)
//video.play();
//	$('#vid').on('ended', function(){
//		console.log('Video has ended!'); (showed in console, fadeOut didn't work)

