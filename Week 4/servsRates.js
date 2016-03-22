$(document).ready(function(){
	
	$(function(){
		$("#hairBlurb").hide();
		$("#makeupBlurb").hide();
		$("#nailBlurb").hide();

	});

	$('#hair').on("click",function(){
		if($('#makeupBlurb').show()){
			$('#makeupBlurb').hide();
			$('#hairBlurb').show();
		}
			
		
	});

	$('#makeup').on("click",function(){
		if($('#hairBlurb').show()){
			$('#hairBlurb').hide();
			$('#makeupBlurb').show();
		}
		
	});

//trying to add in nails---I'm a little weak on the multiple if conditions still

	// $('#nails').on("click",function(){
	// 	if($('#hairBlurb').show()){
	// 		$('hairBlurb').hide();
	// 		$('nailBlurb').show();
	// 	} else if($('#makeupBlurb').show()){
	// 		$('makeupBlurb').hide();	
	// 		$('nailBlurb').show();
	// 	}
	// });
});