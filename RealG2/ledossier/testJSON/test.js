

// var jsonPaul = {'id_nb': 0,'pseudo_str':'Popoledu64', 'email_str':'polo@gni.ko','pass_str':'azertyuio'};
// var jsonJacqueLembrouille = {'id_nb': 1, 'pseudo_str':'lembrouille', 'email_str':'jacquietmichel@gmail.com', 'pass_str':'pedobear64'};
// var jsonPaul2 = {'id_nb': 0,'pseudo_str':'PauloLeFifou', 'email_str':'polo@gni.ko','pass_str':'azertyuio'};
// var jsonPaul3 = {'id_nb': 0,'pseudo_str':'PaulLeDeglingo', 'email_str':'polo@gni.ko','pass_str':'azertyuio'};
// var jsonLevrette = {'id_nb': 48,'pseudo_str':'LevretteLaGalette', 'email_str':'chev@uche.moi','pass_str':'youpiyoupiyeah'};

// var paul = new Utilisateur();
// var jacqueLembrouille = new Utilisateur();
// var levrette = new Administrateur();

// paul.mouille(jsonPaul);
// jacqueLembrouille.mouille(jsonJacqueLembrouille);
// levrette.mouille(jsonLevrette);

/*
 Affichons le profil d'un utilisateur 
 ...
 ...
 ...
 GO !!!!
 */
 function CreateDisplay()
 {
	$form = $('<form/>').attr('id', 'Visualisation');
	var obj = new Administrateur();
	for(var k in obj)
	{
		if(typeof((obj[k])  != "function"))
		{
			var $p = $('<p/>').html(k).appendTo($form);
			$('<input/>').addClass(k).appendTo($form);
		}
	}
	$form.appendTo($('body'));
 }
 
 
 function MontreTout(_user)
 {
	for(var k in _user)
	{
		if((typeof(_user[k]) != "function"))
		{
			$('.'+k).val(_user[k]);
		}
	}
 }
 
 var users = [];
 function createAll(json)
 {
	 for(var k=0; k<json.length; k++)
	 {
		var user = new Utilisateur();
		user.hydrate(json[k]);
		users.push(user);
	 }
 }
 