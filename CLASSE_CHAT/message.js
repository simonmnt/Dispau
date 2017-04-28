
function Message(the_chat) {
	// body...
	this.id_nb = new Date();
	this.expediteur_obj = utilisateur_moi;
	this.destinataire_obj = the_chat;
	this.contenu_str = "";
	this.statut_mst = "NON_LU";


	this.transmettre_BDD = function () {
		// body...
		if (this.contenu_str != "") {
			tableau_messages.push(this);
			
		}
	}
	// mettre à jour le chat
	this.update = function () {
		// body...
		if (this.contenu_str != "") {
			the_tchat.affichageMessages(tableau_messages);
			$('#message-input').val("");
		}
	}

	// var ici = this;
	// this.hydrate = function (message_obj) {
	// 	// body...
	// 	for (var i in message_obj){
	// 		ici[i] = message_obj[i];
	// 	}
	// }

}