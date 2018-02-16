$(document).ready(function() {
     $("#request").click(function(e) {
         e.preventDefault();
         //var value = $("#request").val();
         //console.log(value);
         var myurl = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
	 var output="";
         $.ajax({
             url: myurl,
             dataType: "json",
             success: function(json) {
                // console.log(json);

		 output += "<h2>" + json.setup + "</h2>";
		 output += "<form><input id='getPunchline' type='button' value='See punchline!'></input></form>";
		 $("#jokePunchline").html("<p></p>");
		 $("#jokeSetup").html(output);


		 $(document).on("click", '#getPunchline', function(e){
		e.preventDefault();
		var punchline="";
	
		punchline += "<h2>" + json.punchline + "</h2>";
		$("#jokePunchline").html(punchline);


	    });//end of punchline click
		 
             }//end of success

         });//end of ajax

     });//end the request click


    
 });
