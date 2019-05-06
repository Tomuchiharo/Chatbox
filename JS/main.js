$(document).ready(function(){
	$('#btnJoin').on('click', onclickjoin);
	$('#btnPseudo').on('click', onclickPseudo);
	$('#btnCreate').on('click', onclickCreate);

});


function onclickjoin(){

	var chatroom = $('#inputlogin').val();

	$.ajax({
		url : 'join.php', 
		method : 'post',
		dataType: 'json',
		data : {chatroom : chatroom},
		success:function(data){
		  if(data==false){
			  $('#badName').fadeIn();
		  }else {
			$('#badName').fadeOut();
			$(location).attr('href',"pseudo.html?chatroom="+chatroom);

		  }
		}
	});


}

function onclickPseudo(){
	var url = window.location.href; 
			var myUrl = url.split("=");
            var chatroom = myUrl[1];
            
	var pseudo = $('#inputlogin').val();

	$.ajax({
		url : 'pseudo.php', 
		method : 'post',
		dataType: 'json',
		data : {pseudo : pseudo},
		success:function(data){
			$(location).attr('href',"chat.html?name="+pseudo+"=chatroom="+chatroom);
			
		}
	});
}

function onclickCreate(){

    var chat = $('#inputlogin').val();
    var newchat = chat.replace(' ', '-');
    var chatroom = newchat.toUpperCase();

    $.ajax({
        url : 'createChat.php',
        method : 'post',
        dataType: 'json',
        data : {chatroom : chatroom},
        success:function(data){
              console.log('ok');

              $(location).attr('href',"pseudo.html?chatroom="+chatroom);
        }
    });


}

