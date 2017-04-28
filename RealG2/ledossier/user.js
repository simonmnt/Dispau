/**
 * Profil
 * @class
 * @param {string} _pseudo_str
 * @param {string} _email_str
 * @param {string} _pass_str
 */

function Profil(_pseudo_str, _email_str, _pass_str) {
    var ici = this;
	this.id_nb ;
    this.pseudo_str = _pseudo_str;
    this.email_str = (_email_str && _pass_str)?_email_str : "guess"+ici.id_nb+"@dispau.com";
    this.pass_str = _pass_str || null;
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
        }
    }
}

function Delete(id_nb){
    if(id_nb && this.dateInscription_date && this.pass_str == null){
        setTimeout(function(){
            delete listUtilisateurs[id_nb];
        }, 400000000000);
    }
}
/**
 * Utilisateur
 * @class
 * @param {string} _pseudo_str
 * @param {string} _email_str
 * @param {string} _pass_str
 */
 
function Utilisateur(_pseudo_str, _email_str, _pass_str) {
    this.annoncesParticipees_arr = []; //id
    this.annoncesProposees_arr = []; //id
    this.abonnementsLieux_arr = []; //id
    this.amis_arr = []; //id
    this.demandesAmis_obj = {};
    this.notificationsRecues_arr = [];
    this.abonnementsLieux_arr = [];
    /**
     * demanderAmi
     * @function
     * @param {obj} Utilisateur
     */
    this.demanderAmi = function(_Utilisateur) {
    	var utile = new DemanderAmi();
    	utile.de_usr = ici.id_nb;
    	utile.a_ussr = Utilisateur.id_nb;
    	utile.date_date = new Date.now();
    	return utile;
	}
	
    /**
     * validerDemandeAmi
     * @function
     */
    this.validerDemandeAmi = function() {};
    
    /**
     * onNotificationRecue
     * @function
     */
    this.onNotificationRecue = function() {};
	
	/**
     * call
     * @function
     * Utilisateur herite de Profil
     */
	Profil.call(this, _pseudo_str, _email_str, _pass_str);
}

/**
 * Gestionnaire
 * @class
 * @param {string} _pseudo_str
 * @param {string} _email_str
 * @param {string} _pass_str
 */
 
function Gestionnaire(_pseudo_str, _email_str, _pass_str) {
    this.annoncesGerees_arr = [];
	
	/**
     * call
     * @function
     * Gestionnaire herite de Utilisateur
     */
	Utilisateur.call(this, _pseudo_str, _email_str, _pass_str);
}

/**
 * Administrateur
 * @class
 * @param {string} _pseudo_str
 * @param {string} _email_str
 * @param {string} _pass_str
 */
 
function Administrateur(_pseudo_str, _email_str, _pass_str) {
    this.lieuxAdministres_ar = [];
    this.validerAnnonce = function() {};
	
    /**
     * call
     * @function
     * Administrateur herite de Gestionnaire
     */
	Gestionnaire.call(this, _pseudo_str, _email_str, _pass_str);
}

/*
* 
* @function
*
*/

// Creer une Class liste d'utilisateur
var listUtilisateurs = {};

function ListUtilisateurs(_pseudo_str, _email_str, _pass_str)
{
    if(_pseudo_str && _email_str && _pass_str){
        var _pseudo_str = new Profil(_pseudo_str, _email_str, _pass_str);
        return _pseudo_str;
    }
    if(abonnementsLieux_arr){
        var _pseudo_str = new Utilisateur(_pseudo_str, _email_str, _pass_str);
        return _pseudo_str;
    }
    if(annoncesGerees_arr){
        var _pseudo_str = new Gestionnaire(_pseudo_str, _email_str, _pass_str);
        return _pseudo_str;
    }
    if(lieuxAdministres_ar){
        var _pseudo_str = new Administrateur(_pseudo_str, _email_str, _pass_str);
        return _pseudo_str;
    }
         
    var hydrateUtilisateurs = function(dbv) {
        for(var k in objet ) {
        listUtilisateurs.hydrate(ListUtilisateurs);
        }
    }

}
listUtilisateurs.push(ListUtilisateurs()); 


/*--------------------------------------
    code en cours
-------------------------------------- */
/**
 * DemanderAmi
 * @class
 */
function DemanderAmi(){
    this.de_usr;
    this.a_usr;
    this.date_date = new Date.now();

    
/**
* envoyeDemandeAmi
* @function
*/
    this.envoyerDemandeAmi = function(){};
    
}