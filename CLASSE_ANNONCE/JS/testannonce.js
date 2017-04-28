utilisateur=
{
	age:65,
	id_nb:16
}

test_ann=new Annonce();
test_ann.id_nb=1;
test_ann.nom_str="Poker";
test_ann.lieu_nb=5;
test_ann.description_str='pour jouer au poker';
test_ann.photo_str='photoOriginale.jpg'
test_ann.personnesInscrites_ar=[1,2,3,4,5,6,7,9,8,10,11,12,13,14,15];
test_ann.personnesMax_nb=15;
test_ann.personnesMin_nb=5;
test_ann.personnesBannies_ar=[91,92];
test_ann.salleDAttente_ar=[81,82];
test_ann.limiteAge_nb=18;
test_ann.validite_bl=true;
test_ann.annulee_bl=false;
test_ann.dateFinInscriptions_dat=new Date(2018,0,27,14,25);

console.log(test_ann.modifierLieu(5));
console.log(test_ann.dateFinInscriptions_dat);
console.log('personnes max : '+test_ann.personnesMax_nb);
console.log('personnes min : '+test_ann.personnesMin_nb);
console.log('liste dattente : ' + test_ann.salleDAttente_ar);
console.log('liste inscrits : ' + test_ann.personnesInscrites_ar);
console.log('Nom : ' + test_ann.nom_str);
