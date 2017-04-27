/* user-traitement.js */

var paul = new Utilisateur();
var jacqueLembrouille = new Utilisateur();
var levrette = new Administrateur();

paul.hydrate(jsonPaul);
jacqueLembrouille.hydrate(jsonJacqueLembrouille);
levrette.hydrate(jsonLevrette);

$(document).ready(function() {

	var $btnEnvoie = $('#btn-user-send');
	$btnEnvoie.click(userFormEnvoie);
	//console.log("OLA");
	afficherDataUser(levrette)

});

function userFormEnvoie()
{
//var leNom = document.formNomPrenom.nom.value ;
//var lePrenom = document.formNomPrenom.prenom.value ;
 
//alert("Votre nom est: " + leNom + "\n" + "Votre prénom est: " + lePrenom + ".") ;
}

function afficherDataUser(utilisateur_obj)
{
	// pseudo_str
	$('#pseudo').html(utilisateur_obj.pseudo_str);
	// email_str
	$('#password').html(utilisateur_obj.pass_str);
	// pass_str
	$('#nom').html(utilisateur_obj.nom_str);
	// prenom_str
	$('#email').html(utilisateur_obj.email_str);
	// nom_str
	$('#description').html(utilisateur_obj.description_str);
	// image-profil
	var imageUrl = utilisateur_obj.image_img[0];
	$('#image-profil span').css({
		"background": "url('"+imageUrl+"')", 
		"background-size": "cover",
		"background-position": "center top"
	});
}