$(document).ready(function(){

	infoSession();
	 $('#btnMsg').on('click', insertMsg);

	 $('#quit').on('click', function(){
	 	$(location).attr('href',"login.html");
	 });

	 showMsg();
	 chatName();
	
});

var color = getColor();
var color1 = getColor();

	window.setInterval(showMsg, 2000);

	function getColor(){
		var r = Math.floor(Math.random()*256);          // Random between 0-255
		var g = Math.floor(Math.random()*256);          // Random between 0-255
		var b = Math.floor(Math.random()*256);          // Random between 0-255
		var rgb = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string
		return rgb;
	}

	function scrollToBottom(){

        var chat = $('#chatRoom');
        var y = chat[0].scrollHeight;
        var x = chat[0].scrollTop;
        chat[0].scrollTop = chat[0].scrollHeight;
        
    }

	 var url = window.location.href; 
				var myUrl = url.split("=");
	            var myPseudo = myUrl[1];
	            var myChatroom = myUrl[3];

	function infoSession(){
          
			$('#pseudo').html("<p> Connecté en tant que <strong>"+ myPseudo+"</strong></p>")
			$('#groupe').html(" Discussion : "+ myChatroom );
	}

	
	function showMsg(){

		$.ajax({
		       url : 'show_msg.php',
		       method : 'post',
		       dataType: 'json',
		       data : { pseudo : myPseudo, chat : myChatroom},
		       success:function(data){

		             $('#chatRoom').html('<div id="mainBox">');
		             var i;

		        for(i=0;i<data.length;i++){

		        	var tab = data[i]['dateTime'].split(" ");
		        	var day = tab[0];
		        	var hour = tab[1];

		        	if(data[i]['Pseudo'] == myPseudo){

		             $('#mainBox').append('<div id="boxMsg"><p class="d-inline shadow-none p-3 mb-5 rounded" style=" background-color:' + color + '" >' + data[i]['Content'] + '</p><p id="infoMsg" class = "text-secondary "> Envoyé par <strong>' + data[i]['Pseudo'] + '</strong> le ' + day + ' à ' + hour + '</p></div>');

		         		}else{

		         			 $('#mainBox').append('<div class="text-right" id="boxMsg"><p class=" d-inline  shadow-none p-3 mb-5 rounded" style=" background-color:' + color1 + '">' + data[i]['Content'] + '</p><p id="infoMsg" class = "text-secondary "> Envoyé par <strong>' + data[i]['Pseudo'] + '</strong> le ' + day + ' à ' + hour + '</p></div>');
		         		}

		         		scrollToBottom();

		        	}
		         }
		       
		   });

	
	}

	function insertMsg(){

			var msg = $("#inputMsg").val();

		   $.ajax({
		       url : 'chatMsg.php',
		       method : 'post',
		       dataType: 'json',
		       data : {msg : msg, pseudo : myPseudo, chat : myChatroom},
		       success:function(data){
		  		console.log('success insertMsg')

		       }


		     });
	};

	function chatName(){
		$.ajax({
			url : 'chatName.php',
			method : 'post',
			dataType: 'json',
			success:function(data){

			   var i;
			   for(i=0; i<data.length;i++){
				   $('#chatName').append('<div id="chat"><a href="http://localhost/Chatbox/chat.html?pseudo=jiji=chatroom='+ data[i].chatName +'"  >' +data[i].chatName+ '</a></div>')
			   }

			}
		});
	}

