$(document).ready(function(){

	infoSession();
	$('#btnMsg').on('click', chatMsg);
	
});

 var url = window.location.href; 
			var myUrl = url.split("=");
            var myPseudo = myUrl[1];
            var myChatroom = myUrl[3];

	function infoSession(){
          
			$('#pseudo').html("<p> Connecté en tant que <strong>"+ myPseudo+"</strong></p>")
			$('#groupe').html(" Discussion : "+ myChatroom );
	}


	function chatMsg(){
		   var msg = $("#inputMsg").val();

		   $.ajax({
		       url : 'chatMsg.php',
		       method : 'post',
		       dataType: 'json',
		       data : {msg : msg, pseudo : myPseudo, chat : myChatroom},
		       success:function(data){
		             console.log(data);

		       }
		   });
		}