

var jsonPaul = {'id_nb': 0,'pseudo_str':'Popoledu64', 'email_str':'polo@gni.ko','pass_str':'azertyuio'};
var jsonJacqueLembrouille = {'id_nb': 1, 'pseudo_str':'lembrouille', 'email_str':'jacquietmichel@gmail.com', 'pass_str':'pedobear64'};
var jsonPaul2 = {'id_nb': 0,'pseudo_str':'PauloLeFifou', 'email_str':'polo@gni.ko','pass_str':'azertyuio'};
var jsonPaul3 = {'id_nb': 0,'pseudo_str':'PaulLeDeglingo', 'email_str':'polo@gni.ko','pass_str':'azertyuio'};
var jsonLevrette = {'id_nb': 48,'pseudo_str':'LevretteLaGalette', 'email_str':'chev@uche.moi','pass_str':'youpiyoupiyeah'};

var paul = new Utilisateur();
var jacqueLembrouille = new Utilisateur();
var levrette = new Administrateur();

paul.hydrate(jsonPaul);
jacqueLembrouille.hydrate(jsonJacqueLembrouille);
levrette.hydrate(jsonLevrette);