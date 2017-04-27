/**
 * Profil
 * @class
 * @param {string} _pseudo_str -
 * @param {string} _email_str -
 * @param {string} _pass_str -
 */

function Profil(_pseudo_str, _email_str, _pass_str) {
    this.id_nb ;
    this.pseudo_str = _pseudo_str;
    this.email_str = (_email_str && _pass_str)?_email_str : function(){ //guessid@dispau.com 
    "guess"+ici.id_nb+"@dispau.com"
        
    }; /*Fonction Generateur Dynamique*/
    this.pass_str = _pass_str || null;
    if(!_pass_str){
        var profil = new profil().delete;
    };
    this.prenom_str = "";
    this.nom_str = "";
    this.dateInscription_date = Date.now();
    this.image_img = [];
    this.mouille.parent = this;
    var ici = this;
    
    /**
     * hydrate
     * @function
     * @param {obj} Profil
     */
    this.mouille = function(obj) {
        for (var k in obj) {
            this.parent[k] = obj[k];
            // ici[k] = obj[k];
        }
    }
}

/**
 * Utilisateur
 * @class
 */
 
function Utilisateur() {

    this.annoncesParticipees_arr = []; //id
    this.annoncesProposees_arr = []; //id
    this.abonnementsLieux_arr = []; //id
    this.amis_arr = []; //id
    this.demandesAmis_obj = {};
    this.notificationsRecues_arr = [];
    this.abonnementsLieux_arr = [];

    this.demanderAmi = function(_Utilisateur) {};
    this.validerDemandeAmi = function() {};
    this.onNotificationRecue = function() {};
};
// Utilisateur herite de Profil
Utilisateur.prototype = new Profil();

/**
 * Gestionnaire
 * @class
 */

function Gestionnaire() {
    this.annoncesGerees_arr = [];
};
// Gestionnaire herite de Utilisateur
Gestionnaire.prototype = new Utilisateur();

/**
 * Administrateur
 * @class
 */

function Administrateur() {
    this.lieuxAdministres_ar = [];
    this.validerAnnonce = function() {};
};
// Administrateur herite de Gestionnaire
Administrateur.prototype = new Gestionnaire();

var listUtilisateur = [];
var rempli = function(dbv) {
    for (k in dbv) {
        var utilisateur = new Utilisateur();
        utilisateur.mouille(k);
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

function demandAmi(){
    
    this.de_usr;
    this.a_usr;
    this.date_date = new Date.now();
    
    /*--------------------------------------*/

    this.envoyeDemandeAmi = function(){};
    
}