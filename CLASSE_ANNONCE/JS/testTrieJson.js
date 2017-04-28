/**
 * Created by alexa on 21/04/2017.
 */

function Annonce() {
    this.id_nb;
    this.nom_str;
    this.description_str;
    this.dateDebut_str;
    this.dateFin_str;
    this.dateCreattion_str;
    this.lieu_lie;
    this.centresInterets_ar;
    this.placesMin_nb;
    this.placesMax_nb;
    this.image_Img;
    this.participants_ar;
    this.salleAttente_ar;
    this.banis_ar;
    this.validee_bl;
    function afficher() {

    }


    this.trieDesAnnonces = function () {
        // Le lien du fichier json doit être considéré depuis la page web et non depuis ce javascript
        var tableauAnnonceTrie_tab = [];
        $.getJSON("./js/annonces.json", function (data) {

            for (var i in data) {
                var temp = new Annonce();
                temp.nom_str = data[i].nom_str;
                temp.description_str = data[i].description_str;
                temp.dateDebut_str = data[i].dateDebut_str;
                temp.dateFin_str = data[i].dateFin_str;
                temp.lieu_lie = data[i].lieu_lie;
                temp.placesMin_nb = data[i].placesMin_nb;
                temp.placesMax_nb = data[i].placesMax_nb;
                temp.image_Img = data[i].image_Img;
                temp.participants_ar = data[i].participants_ar;
                tableauAnnonceTrie_tab.push(temp);
            }

        });

        console.log(tableauAnnonceTrie_tab);
        // Tu peux appeler une fonction pour afficher les lieux
        return tableauAnnonceTrie_tab;
    }
}

