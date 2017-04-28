
function Chat(id_chat) {
	// body...
	this.id_nb = id_chat;	
	this.messages_ar = [];
	this.bannis_ar = [];

	this.getMessages = function () {
		// body...
		this.messages_ar = tableau_messages;
	}

	this.setBannis = function (obj) {
		// body...
		alert("bannir???");
		// transmettre dans le tableau des bannis
		// tableau_bannis.push(obj);
	}

	this.getBannis = function () {
		// body...
		this.bannis_ar = tableau_bannis;
	}

	this.evenements = function () {
		// body...
		// évènements
	// $(document).ready(function() {

		$('#valider-btn').on('click', function () {
			// body...
			var mes = new Message(the_tchat);
			mes.contenu_str = $('#message-input').val();
			mes.transmettre_BDD();
			mes.update();
			// console.log(mes);

		});

		$('#messages_tchat div').on('dblclick', function () {
			// body...
			if ($(this).data("message")) {
				the_tchat.setBannis($(this).data("message"));
			}
		})

	// });
	}

	this.affichageMessages = function () {
		// body...

		// init:
		this.getMessages(); //hydratation
		this.getBannis();
		$('#messages_tchat div').remove();

		for (var i = 0; i < this.messages_ar.length; i++) {
			var $div = $('<div>');
			var $p = $('<p>');
			
			if (this.messages_ar[i].expediteur_obj.id_nb == utilisateur_moi.id_nb) {
				$div.addClass("mon_message");
			}
			else
			{
				$div.addClass("autre_user");
				// associe l'objet message à la balise
				$div.data("message",this.messages_ar[i]);
				// console.log($div.data("message"));

			}
			$p.html( this.messages_ar[i].contenu_str );
			$p.appendTo($div);
			$div.appendTo('#messages_tchat');

		}
		var temp = this.messages_ar.length * $('#messages_tchat').height();
		$('#messages_tchat').animate({ scrollTop: temp }, 1000);

		this.evenements();
	}






}