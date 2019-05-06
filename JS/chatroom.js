$(document).ready(function(){

	 //$('#btnMsg').on('click',showMsg);
	 showMsg();
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
		            showMsg();

		       }
		   });
		}

	function showMsg(){

		$.ajax({
		       url : 'show_msg.php',
		       method : 'post',
		       dataType: 'json',
		       data : { pseudo : myPseudo, chat : myChatroom},
		       success:function(data){
		             console.log(data);

		             var i;
		        for(i=0;i<data.length;i++){

		        	if(data[i]['Pseudo'] == myPseudo){

		             $('#chatRoom').append('<p class="bg-info shadow-none p-3 mb-5 rounded">' + data[i]['Content'] + '</p>');

		         		}else{

		         			 $('#chatRoom').append('<p class="bg-secondary shadow-none p-3 mb-5 rounded">' + data[i]['Content'] + '</p>');
		         		}
		        	}
		         }

		       
		   });
	}	