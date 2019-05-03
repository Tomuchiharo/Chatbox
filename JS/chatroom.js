$(document).ready(function(){
	var url = window.location.href; 
			var myUrl = url.split("=");
            var myPseudo = myUrl[1];
            console.log(myPseudo);
			$('#pseudo').html("<p> Connecté en tant que"+ myPseudo+"</p>")

});

