function AnnonceListe(){
    this.annonces_ar = {};

    /**
     * Permet d'ajouter une un Objet annonce dans annonces
     * @param _annonce est un Objet d'annonce
     */
    this.ajouterAnnonce = function (_annonce) {
        var keys = Object.keys(_annonce);
        for(var i = 0; i < keys.length; i++){
            //console.log(_annonce[keys[i]]);
            var annonce = _annonce[keys[i]];
            var implAnnonce = new Annonce();
            implAnnonce.hydrate(_annonce['annonce1']);
            //console.log("Implementer annonce > ", implAnnonce.hydrate(_annonce[annonce]));
            this.annonces_ar[i] = implAnnonce;
        }
    };

    /**
     * Permet de supprimer une annonce par rapport à l'ID de l'annonce
     * @param _annonceID est l'ID de l'annonce
     */
    this.supprimerAnnonce = function (_annonceID) {
        if(_annonceID in this.annonces_ar){
            delete this.annonces_ar[_annonceID];
            console.log("Annonces", this.annonces_ar);
            console.log("Done")
        }

        else console.log("L'annonce n'existe pas")
    };
    
    this.afficherLesAnnonces = function () {
        for(var i in this.annonces_ar){
            var annonces = this.annonces_ar[i];
            console.log("afficherLesAnnonces ", annonces)

        }
    }

    /*this.afficherAnnonce = function (_annonceID) {
        if(_annonceID in this.annonces_ar){
            console.log(this.annonces_ar[_annonceID]);
        }

        else console.log("L'annonce n'existe pas")
    }*/
}

var testAnnonce = {
    "annonce1":{
    "id_nb": 1,
        "nom_str": "toto",
        "description_str": "Qui veut jouer à la belote ?",
        "dateDebut_str": "17-04-2017:15.00",
        "dateFin_str": "17-04-2017:17.00",
        "dateCreattion_str" : "17-04-2017:17.00",
        "lieu_lie": "N°5",
        "centresInterets_ar": ["belote", "tarot", "poker", "apéro"],
        "placesMin_nb": 4,
        "placesMax_nb": 4,
        "image_Img": "./images/belote.jpg",
        "participants_ar": [],
        "salleAttente_ar": [],
        "banis_ar": [],
        "validee_bl": false
},
    "annonce2":{
    "id_nb": 2,
        "nom_str": "Poker",
        "description_str": "Qui veut jouer à la belote ?",
        "dateDebut_str": "17-04-2017:15.00",
        "dateFin_str": "17-04-2017:17.00",
        "dateCreattion_str" : "17-04-2017:17.00",
        "lieu_lie": "N°5",
        "centresInterets_ar": ["belote", "tarot", "poker", "apéro"],
        "placesMin_nb": 4,
        "placesMax_nb": 8,
        "image_Img": "./images/poker.jpg",
        "participants_ar": [],
        "salleAttente_ar": [],
        "banis_ar": [],
        "validee_bl": false
},
    "annonce3":{
    "id_nb": 3,
        "nom_str": "Rami",
        "description_str": "Qui veut jouer au rami avec moi ?",
        "dateDebut_str": "17-04-2017:15.00",
        "dateFin_str": "17-04-2017:17.00",
        "dateCreattion_str" : "17-04-2017:17.00",
        "lieu_lie": "Café du passage",
        "centresInterets_ar": ["belote", "tarot", "poker", "rami", "apéro"],
        "placesMin_nb": 3,
        "placesMax_nb": 5,
        "image_Img": "./images/rami.jpg",
        "participants_ar": [],
        "salleAttente_ar": [],
        "banis_ar": [],
        "validee_bl": false
}
}