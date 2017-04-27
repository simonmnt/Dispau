/* user-traitement.js */

var paul = new Utilisateur();
var jacqueLembrouille = new Utilisateur();
var levrette = new Administrateur();

// paul.hydrate(jsonPaul);
// jacqueLembrouille.hydrate(jsonJacqueLembrouille);
// levrette.hydrate(jsonLevrette);

$(document).ready(function() {

	//var $btnEnvoie = $('#btn-user-send');
	//$btnEnvoie.click(userFormEnvoie);
	//console.log("OLA");
	//afficherDataUser(levrette)
	getUtilisateurs();

});

function userFormEnvoie()
{
//var leNom = document.formNomPrenom.nom.value ;
//var lePrenom = document.formNomPrenom.prenom.value ;
 
//alert("Votre nom est: " + leNom + "\n" + "Votre prénom est: " + lePrenom + ".") ;
}

function getUtilisateurs()
{
	$.getJSON('utilisateurs.json',function(data){
  		// Une ou plusieurs instructions pour traiter les données lues
  		console.log(data);
	});
}

function afficherDataUser(utilisateur_obj)
{
	// pseudo_str
	$('#pseudo').html(utilisateur_obj.pseudo_str);
	// password_str
	$('#password').html(utilisateur_obj.pass_str);
	// nom_str
	$('#nom').html(utilisateur_obj.nom_str);
	// prenom_str
	$('#prenom').html(utilisateur_obj.prenom_str);
	// email_str
	$('#email').html(utilisateur_obj.email_str);
	// description_str
	$('#description').html(utilisateur_obj.description_str);
	// image-profil
	var imageUrl = utilisateur_obj.image_img[0];
	$('#image-profil span').css({
		"background": "url('"+imageUrl+"')", 
		"background-size": "cover",
		"background-position": "center top"
	});
}