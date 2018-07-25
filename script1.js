$(document).ready(function(){

    $("button").click(function(){
  
 
	 var noun = $("#noun").val();

	
	 var Noun = $("#noun2").val();

	 
	 var verb = $("#verb").val();
	
	 
	 var Verb = $("#verb2").val();
	 
	 var weekday = $("#weekday").val();
	 
	 var Madlib = noun + " and " + Noun + " go " + verb + " and " + Verb + " on " + weekday;
	     console.log(Madlib);
	 
	       $("#Madlib").html(Madlib);

});
	
	
	
	
	
	
	
	
	
});