/**
 * Profil
 * @class
 * @param {string} _pseudo_str -
 * @param {string} _email_str -
 * @param {string} _pass_str -
 */

function Profil(_pseudo_str, _email_str, _pass_str) {
    var ici = this;
	this.id_nb ;
    ici.pseudo_str = _pseudo_str;
    ici.email_str = (_email_str && _pass_str)?_email_str : function(){ //guessid@dispau.com 
    "guess"+ici.id_nb+"@dispau.com"
        
    }; /*Fonction Generateur Dynamique*/
    this.pass_str = _pass_str || null;
    /*if(!_pass_str){
        var profil = new Profil().delete;
    };*/
    this.prenom_str = "";
    this.nom_str = "";
    this.dateInscription_date = Date.now();
    this.image_img = [];
    
    
    
    /**
     * hydrate
     * @function
     * @param {obj} Profil
     */
    this.hydrate = function(obj) {
        for (var k in obj) {
            ici[k] = obj[k];
            // ici[k] = obj[k];
        }
    }
	
}

/**
 * Utilisateur
 * @class
 */
 
function Utilisateur(_pseudo_str, _email_str, _pass_str) {
    this.annoncesParticipees_arr = []; //id
    this.annoncesProposees_arr = []; //id
    this.abonnementsLieux_arr = []; //id
    this.amis_arr = []; //id
    this.demandesAmis_obj = {};
    this.notificationsRecues_arr = [];
    this.abonnementsLieux_arr = [];

    this.demanderAmi = function(_Utilisateur) {
	var utile = new DemanderAmi();
	utile.de_usr = ici.id_nb;
	utile.a_ussr = Utilisateur.id_nb;
	utile.date_date = new Date.now();
	return utile;
	}
    this.validerDemandeAmi = function() {};
    this.onNotificationRecue = function() {};
	
	Profil.call(this, _pseudo_str, _email_str, _pass_str);
};
// Utilisateur herite de Profil
//Utilisateur.prototype.bind = new Profil();



/**
 * Gestionnaire
 * @class
 */

function Gestionnaire(_pseudo_str, _email_str, _pass_str) {
    this.annoncesGerees_arr = [];
	
	Utilisateur.call(this, _pseudo_str, _email_str, _pass_str);
};
// Gestionnaire herite de Utilisateur
//Gestionnaire.prototype = new Utilisateur();

/**
 * Administrateur
 * @class
 */

function Administrateur(_pseudo_str, _email_str, _pass_str) {
    this.lieuxAdministres_ar = [];
    this.validerAnnonce = function() {};
	
	Gestionnaire.call(this, _pseudo_str, _email_str, _pass_str);
};
// Administrateur herite de Gestionnaire
//Administrateur.prototype = new Gestionnaire();

var listUtilisateur = [];
var rempli = function(dbv) {
    for (k in dbv) {
        var utilisateur = new Utilisateur();
        utilisateur.hydrate(k);
        listUtilisateur.push(utilisateur);
    }
}



/* function Utilisateur()
{
	this.profil = new Profil();
	this.utilisateur = new DataUtilisateur();
}

function Gestionnaire()
{
	this.profil = new Profil();
	this.utilisateur = new DataUtilisateur();
	this.gestionnaire = new DataGestionnaire();
}

function Administrateur()
{
	this.profil = new Profil();
	this.utilisateur = new DataUtilisateur();
	this.gestionnaire = new DataGestionnaire();
	this.administrateur = new DataAdministrateur();
} */

function DemanderAmi(){
    
    this.de_usr;
    this.a_usr;
    this.date_date = new Date.now();
    
    /*--------------------------------------*/

    this.envoyeDemandeAmi = function(){};
    
};