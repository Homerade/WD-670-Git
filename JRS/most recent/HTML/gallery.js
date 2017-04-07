$(document).ready(function(){	

	var photoBox = document.querySelector('.photoBox');

		var files = [
			"img/gallery pics/2009-01-01 12.01.06.jpg",
			"img/gallery pics/2009-01-19 12.03.04.jpg",
			"img/gallery pics/2009-01-19 12.03.28.jpg",
			"img/gallery pics/2009-01-24 10.05.10.jpg",
			"img/gallery pics/2009-01-24 10.05.22.jpg",
			"img/gallery pics/2009-01-24 10.05.42.jpg",
			"img/gallery pics/2015-04-25 15.41.07.jpg",
			"img/gallery pics/2015-04-25 15.41.29.jpg",
			"img/gallery pics/2015-05-01 13.50.12.jpg",
			"img/gallery pics/2015-05-01 13.50.30.jpg",
			"img/gallery pics/2015-05-09 14.04.05.jpg",
			"img/gallery pics/2015-05-09 14.04.11.jpg",
			"img/gallery pics/2015-05-16 15.08.40.jpg",
			"img/gallery pics/2015-05-16 15.09.32.jpg",
			"img/gallery pics/2015-07-24 12.02.23.jpg",
			"img/gallery pics/2015-07-24 12.02.49.jpg",
			"img/gallery pics/2015-07-24 12.03.01.jpg",
			"img/gallery pics/2015-12-01 17.18.46.png",
			"img/gallery pics/2016-02-05 16.51.48.jpg",
			"img/gallery pics/2016-02-05 16.52.17.jpg",
			"img/gallery pics/2016-04-02 15.45.23.jpg",
			"img/gallery pics/2016-04-02 15.48.45.jpg",
			"img/gallery pics/2016-04-02 15.48.53.jpg",
		];

		for (var i=0; i < files.length; i++){
			var images = document.createElement("img");
			images.className = "images";
			images.src = files[i];
			photoBox.appendChild(images);
		}

});

//WHAT WORKED:
//bg.innerHTML = img1; (no styling)
//img1.innerHTML = "<[display:none removed]>; (video still there as well)
//video.play();
//	$('#vid').on('ended', function(){
//		console.log('Video has ended!'); (showed in console, fadeOut didn't work)

