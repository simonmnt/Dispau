/**
 * Created by alexa on 21/04/2017.
 */

function Annonce() {
    this.id_nb;
    this.nom_str;
    this.description_str;
    this.dateDebut_dat;
    this.dateFin_dat;
    this.dateCreation_dat;
    this.centresInterets_ar;
    this.placesMin_nb;
    this.placesMax_nb;
    this.participants_ar;
    this.banis_ar;
    this.lieu_nb;
    this.gestionnaire_nb;
    this.photo_str;
    this.salleDAttente_ar;
    this.validite_bl;
    this.annulee_bl;
    this.chat_nb;


}
var tableauAnnonceTrie_tab = [];
// Cette fonction va créer une liste d'annonce à partir d'un fichier JSON qui ne posséde que les annonces du lieu

function listeDAnnonceParLieu(json) {

    $.getJSON(json,function (data) {

    for (var i in data) {
        var temp = new Annonce();
        temp.nom_str = data[i].nom_str;
        temp.description_str = data[i].description_str;
        temp.dateDebut_str = data[i].dateDebut_str;
        temp.dateFin_str = data[i].dateFin_str;
        temp.lieu_lie = data[i].lieu_lie;
        temp.placesMin_nb = data[i].placesMin_nb;
        temp.placesMax_nb = data[i].placesMax_nb;
        temp.image_Img = data[i].photo_str;
        temp.participants_ar = data[i].participants_ar;
        tableauAnnonceTrie_tab.push(temp);
    }
        console.log(tableauAnnonceTrie_tab);
    return tableauAnnonceTrie_tab;
    // Tu peux appeler une fonction pour afficher les lieux

    })
}

// json représente le fichier récupéré de la BD et est un JSON
function nbAnnonceDansLaListe(json) {
    return listeDAnnonceParLieu(json).length;
}


function dateIncluse(json, date1, date2) {
    var liste = listeDAnnonceParLieu(json);
    var newListe =[];
    for(var i in liste) {
        if(liste[i].dateFin_str < date2 && liste[i].dateDebut_str > date1) {
            newListe.push(liste[i]);
        }
    };
    return newListe;
}


function dateExcluse(json, date1, date2) {
    var liste = listeDAnnonceParLieu(json);
    var newListe =[];
    for(var i in liste) {
        if(liste[i].dateFin_str > date2 && liste[i].dateDebut_str < date1) {
            newListe.push(liste[i]);
        }
    };
    return newListe;
}

function dateSuperieurA(json, date1) {
    var liste = listeDAnnonceParLieu(json);
    var newListe =[];
    for(var i in liste) {
        if(liste[i].dateDebut_str > date1) {
            newListe.push(liste[i]);
        }
    };
    return newListe;
}

function dateInferieurA(json, date1) {
    var liste = listeDAnnonceParLieu(json);
    var newListe =[];
    for(var i in liste) {
        if(liste[i].dateDebut_str < date1) {
            newListe.push(liste[i]);
        }
    };
    return newListe;
}













