$(document).ready(function(){
	$('#linklogin').on('click', changeBox);
	$('#linkBox').on('click','div a', changeBox1);
	$('#btnJoin').on('click', onclickjoin);
	$('#btnBox').on('click','div button', onclickPseudo);

});


function changeBox(){

	$('#labelbox').html('<h3 class="text-info" id="create"><i class="fas fa-lock"></i> Créer une discussion :</h3>');

	$('#btnBox').html('<button type="button" class="btn btn-info col-md-12" > Créer</button>');

	$('#linkBox').html('<a href="#" class="text-info" id="linklogin1">Rejoindre une discussion</a>')
}

function changeBox1(){

	$('#labelbox').html('<h3 class="text-info" id="create"><i class="fas fa-lock"></i> Rejoindre une discussion :</h3>');

	$('#btnBox').html('<button type="button" class="btn btn-info col-md-12" > Rejoindre</button>');

	$('#linkBox').html('<a href="#" class="text-info" id="linklogin">Créer une nouvelle une discussion</a>')
}



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
			$('#labelbox').html('<h3 class="text-info" id="create"><i class="fas fa-user"></i> Votre pseudo </h3>');

			$('#btnBox').html('<div><button type="button" id="btnPseudo" class="btn btn-info col-md-12" > Rejoindre</button></div>');

			$('#inputBox').html('<input type="text" class="form-control" id="inputlogin">')
			

		  }
		}
	});


}

function onclickPseudo(){
	var url = window.location.href; 
			var myUrl = url.split("=");
            var myChatRoom = myUrl[1];
            
	var pseudo = $('#inputlogin').val();

	$.ajax({
		url : 'pseudo.php', 
		method : 'post',
		dataType: 'json',
		data : {pseudo : pseudo},
		success:function(data){
			$(location).attr('href',"chat.html?name="+pseudo);
			
		}
	});
}

