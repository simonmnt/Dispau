function AnnonceListeElement() {

    this.id_nb = 0;
    this.nom_str = "";
    this.description_str = "";
    this.dateDebut_dat = "";
    this.dateFin_dat = "";
    this.dateCreattion_str = "";
    this.lieu_nb = 0;
    this.centresInterets_ar = [];
    this.placesMin_nb = 0;
    this.placesMax_nb =0;
    this.photo_str = "";
    this.participants_ar = [];
    this.salleDAttente_ar = [];
    this.banis_ar = [];
    this.validee_bl = false;
    this.dateFinInscription_dat = "";
    this.gestionnaire_nb = 0;
    this.annulee_bl = false;
    this.chat_nb = 0;


    AnnonceListe.call(this);

    //console.log('AnnonceListeElement', this.annonces_ar);
    this.afficherToutesLesAnnonces = function () {
        for(var i in this.annonces_ar){
            this.afficherAnnonce(i);
            console.log("i > ", i);
        }
    };

    this.afficherAnnonces = function () {
      this.annonces_ar.forEach(function (el) {
          console.log(el.id_nb);
      })
    };


    /**
     * Permet d'afficher une annonce par rapport à son ID.
     * @param _annonceID ID de l'annonce
     */
    /*this.afficherAnnonce = function (_annonceID) {
        if(_annonceID in this.annonces_ar) {
            for (var i in this.annonces_ar[_annonceID]) {
                var annonce = this.annonces_ar[_annonceID];
                //console.log("i >", i);
                //console.log("this.annonce ", annonce[i]);
                this[i] = annonce[i];
            }

            //Permet de créer le DOM d'affichage de l'annonce.
            var annonceID = document.getElementById('annonce');
            var nom, description, dateDebut, dateFin, dateCreation, lieu, centreInteret, placesMin, placesMax, image,
                particpants;

            image = document.createElement('img');
            image.setAttribute('src', this.photo_str);
            image.setAttribute('alt', this.nom_str);

            nom = document.createElement('h1');
            nom.innerHTML = this.nom_str;

            description = document.createElement('p');
            description.innerHTML = this.description_str;

            dateDebut = document.createElement('div');
            dateDebut.innerHTML = this.dateDebut_dat;

            dateFin = document.createElement('div');
            dateFin.innerHTML = this.dateFin_dat;

            dateFinInscription = document.createElement('div');
            dateFinInscription.innerHTML = this.dateFinInscription_dat;

            dateCreation = document.createElement('div');
            dateCreation.innerHTML = this.dateCreattion_str;

            lieu = document.createElement('p');
            lieu.innerHTML = this.lieu_nb;

            var ulCentreInteret;
            ulCentreInteret = document.createElement('ul');

            for(var i = 0; i < this.centresInterets_ar.length; i++){
                centreInteret = document.createElement('li');
                centreInteret.innerHTML = this.centresInterets_ar[i];
                ulCentreInteret.appendChild(centreInteret);
            }

            placesMin = document.createElement('p');
            placesMin.innerHTML = this.placesMin_nb;

            placesMax = document.createElement('p');
            placesMax.innerHTML = this.placesMax_nb;

            var ulParticipants;
            ulParticipants = document.createElement('ul');

            if(this.participants_ar.length < 0){
                for(var i = 0; i < this.centresInterets_ar.length; i++){
                    particpants = document.createElement('li');
                    particpants.innerHTML = this.participants_ar[i];
                    ulParticipants.appendChild(particpants);
                }
            }

            else {
                particpants = document.createElement('li');
                particpants.innerHTML = "Aucun participant";
                ulParticipants.appendChild(particpants);
            }

            annonceID.appendChild(image);
            annonceID.appendChild(nom);
            annonceID.appendChild(description);
            annonceID.appendChild(dateDebut);
            annonceID.appendChild(dateFin);
            annonceID.appendChild(dateCreation);
            annonceID.appendChild(dateFinInscription)
            annonceID.appendChild(lieu);
            annonceID.appendChild(ulCentreInteret);
            annonceID.appendChild(placesMin);
            annonceID.appendChild(placesMax);
            annonceID.appendChild(ulParticipants);

        }
        else console.log("L'annonce n'existe pas")
    }*/
    //console.log(AnnonceListe.call(this));
}


/** HYDRATE

 var tmp = 'madeuxiemebalise';

 var monObjet = {'tahar':'#nomdemabalise', 'fabien':'#nomdemabalise2', 'alexandre':'Pose des questions', 'francis':'pose des interrogations'};
 var monObjet2 = {'tahar':'#nomdemabalise'};

 // console.log(monObjet.mabalise);
 // console.log(monObjet[tmp]);



 function MaClasse(){
    this.tahar = 'ta mère';
    this.fabien = '';
    var ici = this;

    this.hydrate = function(obj){
        for(var i in obj){
            console.log("i > "+i);
            // console.log("Valeur de i : "+obj[i]);
            ici[i] = obj[i];
        }
    }
}

 var maclasse = new MaClasse();
 console.log(maclasse.tahar);
 maclasse.hydrate(monObjet);
 console.log("Alexandre = "+maclasse.alexandre);

**/