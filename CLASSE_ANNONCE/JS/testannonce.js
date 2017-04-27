test_ann=new Annonce();
test_ann.id_nb=1;
test_ann.nom_str="Poker";
test_ann.description_str='pour jouer au poker';
test_ann.photo_str='photoOriginale.jpg'
test_ann.personnesInscrites_ar=[1,2,3,4,9,8,7,12,51];
test_ann.personnesMax_nb=11;
test_ann.personnesMin_nb=5;
test_ann.personnesBannies_ar=[5,6];
test_ann.salleDAttente_ar=[]
test_ann.validite_bl=true;
test_ann.dateFinInscriptions_dat=new Date(2017,4,23);
console.log(test_ann.modifierNbPersonnes(5,12));
console.log('personnes max :'+test_ann.personnesMax_nb);
console.log('personnes min :'+test_ann.personnesMin_nb);
console.log('liste dattente' + test_ann.salleDAttente_ar);
console.log('liste inscrits' + test_ann.personnesInscrites_ar);