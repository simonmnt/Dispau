/*
Chaque methode d'une classe retourne un objet de classe Erreur en cas d'erreur
le code est sur 4 digits ccee
cc = code lié à la classe
ee = code d'erreur à l'intérieur de la classe

Exemple:
var erreur = new(Erreur)
erreur.code = 3745  (37 lié à la classe, 45 numéro de l'erreur dans la classe)
erreur.msg = 'erreur de dépassement de valeur' message explicite
return erreur
*/


function Erreur()
{
	this.code = 0;
	this.msg  = '';
}
