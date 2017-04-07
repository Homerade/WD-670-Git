$(document).ready(function(){
	
	$(function(){
		$("#hairBlurb").hide();
		$("#makeupBlurb").hide();
		$("#nailBlurb").hide();

	});

	$('#hair').on("click",function(){
		if($('#makeupBlurb').show() || $('#nailBlurb').show()){
			$('#makeupBlurb').hide();
			$('#nailBlurb').hide()
			$('#hairBlurb').show();
		}
		
	});

	$('#makeup').on("click",function(){
		if($('#hairBlurb').show() || $('#nailBlurb').show()){
			$('#hairBlurb').hide();
			$('#nailBlurb').hide();
			$('#makeupBlurb').show();
		}
		
	});

	$('#nails').on("click",function(){
		if($('#hairBlurb').show() || $('#makeupBlurb').show()){
			$('#hairBlurb').hide();
			$('#makeupBlurb').hide();
			$('#nailBlurb').show();
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