function AnnonceListeElement() {

    AnnonceListe.call(this);

    this.afficherAnnonces = function () {
        this.annonces_ar.forEach(function (el) {
            console.log(el.id_nb);

            //Permet de créer le DOM d'affichage de l'annonce.
            var annonceID = document.getElementById('annonce');
            var divAnnonce = document.createElement('div');

            var nom, description, dateDebut, dateFin, dateCreation, lieu, centreInteret, placesMin, placesMax, image,
                particpants;



            image = document.createElement('img');
            image.setAttribute('src', el.photo_str);
            image.setAttribute('alt', el.nom_str);

            nom = document.createElement('h1');
            nom.innerHTML = el.nom_str;

            description = document.createElement('p');
            description.innerHTML = el.description_str;

            dateDebut = document.createElement('div');
            dateDebut.innerHTML = el.dateDebut_dat;

            dateFin = document.createElement('div');
            dateFin.innerHTML = el.dateFin_dat;

            dateFinInscription = document.createElement('div');
            dateFinInscription.innerHTML = el.dateFinInscription_dat;

            dateCreation = document.createElement('div');
            dateCreation.innerHTML = el.dateCreattion_str;

            lieu = document.createElement('p');
            lieu.innerHTML = el.lieu_nb;

            var ulCentreInteret;
            ulCentreInteret = document.createElement('ul');

            for (var i = 0; i < el.centresInterets_ar.length; i++) {
                centreInteret = document.createElement('li');
                centreInteret.innerHTML = el.centresInterets_ar[i];
                ulCentreInteret.appendChild(centreInteret);
            }

            placesMin = document.createElement('p');
            placesMin.innerHTML = el.placesMin_nb;

            placesMax = document.createElement('p');
            placesMax.innerHTML = el.placesMax_nb;

            var ulParticipants;
            ulParticipants = document.createElement('ul');

            //Test si les il y a des participants dans le tableau
            if (el.participants_ar.length < 0) {
                for (var i = 0; i < el.centresInterets_ar.length; i++) {
                    particpants = document.createElement('li');
                    particpants.innerHTML = el.participants_ar[i];
                    ulParticipants.appendChild(particpants);
                }
            }

            else {
                particpants = document.createElement('li');
                particpants.innerHTML = "Aucun participant";
                ulParticipants.appendChild(particpants);
            }

            divAnnonce.appendChild(image);
            divAnnonce.appendChild(nom);
            divAnnonce.appendChild(description);
            divAnnonce.appendChild(dateDebut);
            divAnnonce.appendChild(dateFin);
            divAnnonce.appendChild(dateCreation);
            divAnnonce.appendChild(dateFinInscription)
            divAnnonce.appendChild(lieu);
            divAnnonce.appendChild(ulCentreInteret);
            divAnnonce.appendChild(placesMin);
            divAnnonce.appendChild(placesMax);
            divAnnonce.appendChild(ulParticipants);
            annonceID.appendChild(divAnnonce);
        });
    }
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