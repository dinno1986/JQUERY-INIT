//Supprimer la div "#remove" au click sur le boutton '#removeDiv';

    $("#removeDiv").click( function(){
    	$("#remove").remove();
});


// Lors de la saisie de text dans l'input "#setText", faire apparaitre le text dans la div '#needText'; (on-change);
$('#setText').change( function(){
	$('#needText').append( $('#setText').val() );
});
