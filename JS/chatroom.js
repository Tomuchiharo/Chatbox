$(document).ready(function(){
	var url = window.location.href; 
			var myUrl = url.split("=");
            var myPseudo = myUrl[1];
            console.log(myPseudo);
			$('#pseudo').html("<p> Connecté en tant que"+ myPseudo+"</p>")

});


function chatMsg(){
    var msg = $("#inputMsg").val();

    $.ajax({
        url : 'chatMsg.php',
        method : 'post',
        dataType: 'json',
        data : {msg : msg},
        success:function(data){
              console.log('ok');

        }
    });
}
