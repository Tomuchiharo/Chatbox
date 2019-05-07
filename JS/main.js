$(document).ready(function(){
	$('#linklogin1').on('click', function(){
		var url = window.location.href; 
		var myUrl = url.split("=");
		var myMail = myUrl[1];
		$(location).attr('href',"choiceChat.html?mail="+myMail);
	});
	$('#linklogin').on('click', function(){
		var url = window.location.href; 
		var myUrl = url.split("=");
		var myMail = myUrl[1];
		$(location).attr('href',"create.html?mail="+myMail);
	});
	 $('#btnJoin').on('click', getInfos1);

	$('#btnCreate').on('click', getInfos);
	$('#btnCptCreate').on('click', cpteCreate);
	$('#btnConnect').on('click', checkMail);

});

function cpteCreate(){
	
	var mail = $('#leMail').val();
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(reg.test(String(mail).toLowerCase()) == false){
		$('#badName').fadeIn();
	} else {
		$('#badName').fadeOut();
	var pseudo = $('#lePseudo').val();
	
	var password = $('#leMDP').val();
	$.ajax({
		url : 'createCpt.php', 
		method : 'post',
		dataType: 'json',
		data : {pseudo:pseudo, mail:mail, password:password},
		success:function(data){
console.log(data)
$(location).attr('href',"create.html?mail="+mail);
		
		}
	});
}
}

function checkMail(){
	var mail = $('#inputMail').val();
	var password = $('#inputMDP').val();
	$.ajax({
		url : 'checkMail.php', 
		method : 'post',
		dataType: 'json',
		data : {mail:mail, password:password},
		success:function(data){
console.log(data)
if(data.result=="false"){
	$('#badName').fadeIn();
}else{
	$('#badName').fadeOut();
	$(location).attr('href',"create.html?mail="+mail);
}

		
		}
	});
}

function getInfos(){
	var pseudo;
	var url = window.location.href; 
	var myUrl = url.split("=");
	var myMail = myUrl[1];
	$.ajax({
		url : 'getInfos.php', 
		method : 'post',
		dataType: 'json',
		data : {mail:myMail},
		success:function(data){

 	pseudo = data['Pseudo'];
	console.log(data);
	onclickCreate(pseudo);
	
		}
		
		});

}

function getInfos1(){
	var pseudo;
	var url = window.location.href; 
	var myUrl = url.split("=");
	var myMail = myUrl[1];
	$.ajax({
		url : 'getInfos.php', 
		method : 'post',
		dataType: 'json',
		data : {mail:myMail},
		success:function(data){

 	pseudo = data['Pseudo'];
	console.log(pseudo);
	onclickjoin(pseudo);
	
		}
		
		});

}

function onclickjoin(pseudo){

	console.log(pseudo);

	
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
			$(location).attr('href',"chat.html?pseudo="+pseudo+"=chatroom="+chatroom);
			

		  }
		}
	});


}

function onclickCreate(pseudo){

	console.log(pseudo);
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

			  $(location).attr('href',"chat.html?pseudo="+pseudo+"=chatroom="+chatroom);
        }
    });


}

