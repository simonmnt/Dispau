/* form-traitement.js */

$(document).ready(function() {

	// form-btn-user-send action
	$('#form-btn-user-send').click(function(event) {
	  event.preventDefault();
	  recupFormData();
	});


	function recupFormData()
	{
		// recup valeur input pseudo_str
		var pseudo_str = $('#form-pseudo-input').val();
		console.log(pseudo_str);

		// recup valeur input password_str
		var password_str = $('#form-password-input').val();
		console.log(password_str);

		// recup valeur nom_str
		var nom_str = $('#form-nom-input').val();
		console.log(nom_str);

		// recup valeur email_str
		var email_str = $('#form-email-input').val();
		console.log(email_str);

		// recup valeur file_str
		var file_str = $('#form-file-input').val();
		console.log(file_str);
	}

});