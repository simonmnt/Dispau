/*definition de la Classe Annonce*/ /* code erreur 01*/
function Annonce()
{
	var ici=this;
	this.id_nb; /*identifiant de l'annonce. Cle de la base de donnée*/
	this.nom_str; /*nom de l'annonce*/
	
	this.photo_str; /*nomdu fichier qui contient la photo liée à l'annonce*/
	this.description_str; /* description de l'annonce en chaine de caractere sans attribut*/
	this.personnesMax_nb; /*nombre de personnes maximum*/
	this.personnesMin_nb; /*nombre de personnes minimum*/
	this.personnesInscrites_ar=[]; /*tableau de id users, liste des participants à l'annonce*/
	this.salleDAttente_ar=[]; /*tableau de Id users, liste des participants en liste d'attente par ordre de priorité*/
	this.personnesBannies_ar=[]; /*tableau de Id d'users; liste des participants bannis*/
	this.lieu_nb;  /*Id clé) du Lieu auquel est attaché l'annonce. */
	this.dateDebut_dat; /*date  du début de l'activité de cette annonce*/
	this.dateFinInscriptions_dat; /*Date   limite pour les inscriptions */
	this.dateFin_dat; /*date  de la fin de l'activité*/
	this.dateCreation_dat; /*date de creation de l'annonde. Se met automatiquement*/
	this.gestionnaire_nb; /* id du gestionnaire */
	
	this.validite_bl=false; /*booleen annonce validee=true*/
	this.annulee_bl=false; /*booleen annonce annulée Pour la recréer, il faut en recréer une, avec un Id different*/
	this.limiteAge_nb; /*age minimum requis pour la participation en années*/
	this.conditionsDAdmition_st; /*chaine de caractere decrivant d'autres conditions d'admission*/
	this.centresDInterets_ar; /*Liste des centres d'interets auquels se rapporte cette annonce.¨Pour cibler les éventuels "clients"*/
	this.salleDeTchat_nb; /* Salle de tchat specifisue pour cette activité */




this.hydrate = function(obj)
{
	console.log("Annonce obj >", obj);
    for (var i in obj)
    {
        this[i] = obj[i];
    }
};

/* traite les demandes d'inscription ajoute l'utilisateur dans le tableau des inscrits, vérifie si il peut être inscrit,
    le met en liste d'attente si le nombre max est atteint
@param {number} utilisateur : objet utilisateur
@returns 1 si inscription, 2 si liste d'attente
@returns {erreur}
	
	1002 si l'utilisateur est bloqué
	1004 si la date d'inscription est depassee
	1005 si l'utilisateur n'a pas l'age requis
	1006 si l'utilisateur est déjà inscrit
	1007 si l'utilisateur est déjà en liste d'attente
	1008 si l'annonce est annulée
	1009 si l'annonce n'est pas validée
@author Francis Thomas le 9 Avril 2017*/

this.inscrireUser =function(utilisateur)
{
var resultat;
var idUser=utilisateur.id_nb;
/* le test sur l'age requiert la classe utilisateur la ligne suivante est provisoire */
if (utilisateur.age<ici.limiteAge_nb) 
	{
		var err05= new Erreur;
		err05.code = 1005;
		err05.msg = "l'age limite n'est pas atteint"
		return err05;
	}

if (!ici.validite_bl)/* test si l'annonce n'est pas validée*/
	{
		var err09= new Erreur;
		err09.code = 1009;
		err09.msg = 'annonce non validee'
		return err09;
	} 

if (ici.annulee_bl) /* test si l'annonce est annulée */
	{
		var err08= new Erreur;
		err08.code = 1008;
		err08.msg = 'annonce annulee'
		return err08;
	}

if (ici.personnesBannies_ar.indexOf(idUser)>=0) /* test si l'utilisateur est bloqué*/
	{
		var err02= new Erreur;
		err02.code = 1002;
		err02.msg = 'utilisateur bloqué'
		return err02;
	}

if (Date.now()>ici.dateFinInscriptions_dat.getTime())/* test si la date d'inscription est dépassée */
	{
		var err04= new Erreur;
		err04.code = 1004;
		err04.msg = 'date inscription dépassée'
		return err04;
		
	}


if (ici.personnesInscrites_ar.indexOf(idUser)>=0)/* test si la personne est déjà inscrite */
	{
		var err06= new Erreur;
		err06.code = 1006;
		err06.msg = 'utilisateur deja inscrit'
		return err06;
	}

if (ici.salleDAttente_ar.indexOf(idUser)>=0) /* test si la personne est déjà en liste d'attente */
	{
		var err07= new Erreur;
		err07.code = 1007;
		err07.msg = 'utilisateur deja en liste d\'attente'
		return err07;
	}
if (ici.personnesInscrites_ar.length<ici.personnesMax_nb) /*si il reste au moins une place */
	{
		ici.personnesInscrites_ar.push(idUser);	
		return 1;
	}
else 
	{
		ici.salleDAttente_ar.push(idUser)
		
		
		return 	2;
	}	
} //fin de la methode inscrireUser

/*Annulation de l'annonce
mets le booleen annulee_bl à true
@returns erreur 1010 si l'annonce est déjà annulée
@author Francis Thomas le 9 Avril 2017*/

this.annuler=function()
{
if (ici.annulee_bl==true)
    {
        var err10= new Erreur;
		err10.code = 1010;
		err10.msg = 'annonce deja annulee'
		return err10;

    }
else
    {
        ici.annulee_bl=true;
        return true;
    }
}// fin de la méthode annuler


/*Modifie le nom d'une annonce
 avec des parametres entres par celui qui modifie. 
 	@param  {string}  	nom 			nom de l'annonce à changer 
 	return true si ça s'est bien passe
 	false si le nom de l'annonce n'est pas correct*/

this.modifierNom=function(nom_str)
{
    if (nom_str =='')
        {
        var err10= new Erreur;
		err10.code = 1011;
		err10.msg = 'le nom entré est nul'
		return err10;
        }
    else
        {
            ici.nom_str=nom_str;	
            return true;
        }

}


/*Modifie la photo d'une annonce
 avec des parametres entres par celui qui modifie. 
 	@param  {string}  	photo 			nom du fichier dela photo jpg
 	return true si ça s'est bien passe*/
 	
this.modifierPhoto=function(photo_str)
{
    if (photo_str =='')
        {
            var err12= new Erreur;
		err12.code = 1012;
		err12.msg = 'le nom de fichier photo entre\' est nul'
		return err12;
        }
    else
        {
            ici.photo_str=photo_str;	
            return true;
        }
	
}

/*Modifie la description d'une annonce
 avec des parametres entres par celui qui modifie. 
 	@param  {string}  	description chaîne contenant la description
 	return true si ça s'est bien passe*/
this.modifierDescription=function(description_str)
{
if (description_str =='')
        {
        var err13= new Erreur;
		err13.code = 1013;
		err13.msg = 'le nom de description entre\' est nul';
		return err13;
        }
    else
        {
            ici.description_str=description_str;	
            return true;
        }
		
}

/*Modifie la description d'une annonce
 avec des parametres entres par celui qui modifie. 
 	@param  {nb}  	idLieu  identifiant du lieu
 	return true si ça s'est bien passe*/


this.modifierLieu=function(idLieu_nb)
{
if (idLieu_nb == ici.lieu_nb)
    {
        var err14= new Erreur;
		err14.code = 1014;
		err14.msg = 'le meme lieu a ete entre\''
		return err14;
    }
else
    {
        ici.lieu_nb = idLieu_nb;
        return idLieu_nb;
    }
}



/* Modifie le nombre de personnes max et min admises dans une annonce
retire les derniers inscrits (par date d'inscription) éventuellement et les met en liste d'attente
	@param {number}		personnesMax 	nombre max de personnes admises est -1 si pas de modif
	@param {number}		personnesMin 	nombre min de personnes admises est -1 si pas de modif
	@returns {objet} 	type :  false si on a mis des personnes en liste d'attente
								true si on a viide une partie de la liste d'attente pour les mettre dans les inscrits
						liste : tableau des utilisateurs transferes, que type soit vrai ou faux
	*/


this.modifierNbPersonnes=function(personnesMax_nb,personnesMin_nb)
{   
    var  resultat={
    				type  : true,
    				liste : []
    			  }	

     if ((personnesMin_nb != -1 && personnesMax_nb != -1) && personnesMin_nb > personnesMax_nb)
     {
     	var err15= new Erreur;
		err15.code = 1015;
		err15.msg = 'Nombre de personnes Min superieur au nombre de personnes Max'
		return err15;
  
     }

    if (personnesMin_nb != -1) // si personneMin changé
    {
    	if ((personnesMin_nb > ici.personnesMax_nb) && (personnesMax_nb == -1))
    	{
    	var err16= new Erreur;
		err16.code = 1016;
		err16.msg = 'Nombre de personnes Max existant inferieur au nombre de personnes Min fourni'
		return err16;
    	}
        ici.personnesMin_nb = personnesMin_nb;
    }
    if (personnesMax_nb != -1)
    {
    	var difference = personnesMax_nb - ici.personnesMax_nb; // difference entre exixtant et entree

    	if ((ici.personnesMin_nb > personnesMax_nb) && (personnesMin_nb == -1))
    	{
    	var err17= new Erreur;
		err17.code = 1017;
		err17.msg = 'Nombre de personnes Min  existant superieur au nombre de personnes Max fourni'
		return err17;
    	}
       
       ici.personnesMax_nb=personnesMax_nb;

       if (ici.personnesInscrites_ar.length > personnesMax_nb) // gestion de la salle d'attente si on diminue le nombre max
        {
           var   tailleOrigine_nb = ici.personnesInscrites_ar.length; // stocke le nombre initial de personnes inscrites
           
           
           for (i=tailleOrigine_nb ; i > personnesMax_nb ; i--)
            {
                var sorti= ici.personnesInscrites_ar.pop() // dernier inscrit a mettre an liste d'attente
                ici.salleDAttente_ar.unshift(sorti) // le premier élément a la plus haute priorité 
                resultat.liste.unshift(sorti) // retour des personnes mises en salle d'attente dans l'ordre de priorité
                resultat.type = false;
            }
        }
       if ((ici.personnesInscrites_ar.length < personnesMax_nb) && ici.salleDAttente_ar.length != 0) 
       	// si on augmente le nombre max et la salle d'attente n'est pas vide
       		{
       			var minimum = Math.min(difference,ici.salleDAttente_ar.length)
       			for (var i = 0; i < minimum; i++) 
       			{
       				var entre = ici.salleDAttente_ar.shift();
       				ici.personnesInscrites_ar.push(entre);
       				resultat.type = true;
       				resultat.liste.push(entre);
       			}
       		}

    }
    return resultat;
} // fin de la methode modifierNbPersonnes

/* Modifie l'age limite d'inscription
retire les inscrits trop jeunes
	@param {number}		age 			age limite en années
	@returns {array of numbers} 	liste des personnes sorties
	*/
this.modifierAgeLimite=function(age_nb)
{

}


/* Modifie les dates de début, de fin et de limite d'inscription controle si la date de debut est bien posterieure à now()
@param 		{date} 			dateDebut				
@param 		{date} 			dateFin 				
@returns	{array of number} 	tableau contenant la liste des identifiants des personnes mises en liste d'attente	
*/	
this.modifierDates=function(dateDebut_dat,dateFin_dat)
{
	if (dateDebut_dat.valueOf()>datefin_dat.valueOf())
	{
		var err18= new Erreur;
		err17.code = 1018;
		err18.msg = 'date de fin avant date de début'
		return err18;
	}
	if (dateDebut_dat.valueof()<now())
	{
		var err19= new Erreur;
		err19.code = 1019;
		err19.msg = 'date de debut depassee'
		return err19;
	}
	ici.dateFin_dat = dateFin_dat;
	ici.dateDebut_dat = dateDebut_dat;
}
/* envoyer une notification à tous les utilisateurs inscrits*/



 /*************************************************************************************************
								pas fini */	


/* Modifie les dates de début, de fin et de limite d'inscription controle si la date de debut est bien posterieure à now()
@param 		{date} 			dateDebut				date de debut  mettre -1 si inchangé
@param 		{date} 			dateFin 				date de fin  mettre -1 si inchangé
@param 		{date} 			dateFinInscriptions		date limite d'inscription  mettre -1 si inchangé
@returns	{array of number} 	tableau contenant la liste des identifiants des personnes mises en liste d'attente	
*/	
this.modifierDateInscription=function(dateFinInscriptions_dat)
{
	
}


/* Ajoute un centre d'interet relatif à cette annonce
@param 	 {number} 	idCentre  identifiant du centre d'interet
@returns false si le centre d'interet existait deja. true sinon.
*/
this.ajouterCentreDInteret=function(idCentre)
{

}


/* Bloque ou debloque un utilisateur de cette annonce
@param 		{number} 	idUser 	identifiant de l'utilisateur à bloquer ou debloquer
@param 		{boolean}	action 	true si bloquer, false si debloquer
@returns 	{boolean}	false si l'état de blocage était le même pour cet utilisateur. true sinon
*/
this.bloquer=function(idUser,action)
{
}


/*valide ou invalide l'annonce
@param 		{boolean}  	action  true pour valider false pour invalider
@returns 	{boolean}	false si la validité était dans l'état demandé 
*/
this.valider=function(action)
{
	
}

/*supprime un utilisateur 
	l'utilisateur est retiré de la liste personnesIscrites_ar
@param 	{number} 	idUser identifiant de l'utilisateur à supprimer
@returns {boolean} 	false si l'utilisateur n'était pas inscrit
*/
this.supprimerUser=function(idUser)
{
	/*supprime un utilisateur avec son Id
	l'utilisateur est retiré de la liste personnesIscrites_ar*/
}


/*cette fonction permet d'envoyer une notification aux utilisateurs connectes dans le lieuet non inscrits à l'annonce.
 declenché soit spontanement (criteres à definir) soit par l'organisateur de l'annonce
	*/
this.envoyerNotification=function()
{
	
}
}/* Fin de la definition de la classe annonce*/