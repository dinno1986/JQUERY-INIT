//Supprimer la div "#remove" au click sur le boutton '#removeDiv';

    $("#removeDiv").click( function(){
    	$("#remove").remove();
});


// Lors de la saisie de text dans l'input "#setText", faire apparaitre le text dans la div '#needText'; (on-change);
$('#setText').change( function(){
	$('#needText').append( $('#setText').val() );
});

//Change la couleur de la div '#changeColor' en rouge !!! 
$('#setColor').click( function(){
$('#changeColor').css('background-color','red');
});
