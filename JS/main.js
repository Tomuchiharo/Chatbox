$(document).ready(function(){
	$('#linklogin').on('click', changeBox);
	$('#linklogin1').on('click', changeBox1);

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