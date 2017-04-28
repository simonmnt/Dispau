// utilisateur identifié
	var utilisateur_bob = {};
	utilisateur_bob.id_nb = 32;

	var utilisateur_moi = {};
	utilisateur_moi.id_nb = 12

// liste des chats et messages déjà créés 
	var tableau_chat = [ 1 , 2 , 3 , 4 , 5 ];
	var tableau_messages = [
			{
				'expediteur_obj' : utilisateur_moi,
				'contenu_str' : "Le poker c'est vraiment Super !"
			},
			{
				'expediteur_obj' : utilisateur_bob,
				'contenu_str' : "f*** the poker"
			}
		];


// liste des bannis
	var tableau_bannis = [];

// création d'un nouveau chat lors de la création de l'annonce
	var id_chat = tableau_chat.length + 1;
	tableau_chat.push(id_chat);
	var the_tchat = new Chat(id_chat);
	the_tchat.affichageMessages();

// évènements
	// $(document).ready(function() {

	// 	$('#valider-btn').on('click', function () {
	// 		// body...
	// 		var mes = new Message(the_tchat);
	// 		mes.contenu_str = $('#message-input').val();
	// 		mes.transmettre_BDD();
	// 		mes.update();
	// 		// console.log(mes);

	// 	});

	// 	$('#messages_tchat div').on('dblclick', function () {
	// 		// body...
	// 		if ($(this).data("message")) {
	// 			the_tchat.setBannis($(this).data("message"));
	// 		}
	// 	})

	// });