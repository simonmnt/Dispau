
function Affiche_liste(tab) {
	// body...
	this.affiche = function () {
		// body...
		// trier les annonces par lieu

		for (var i = 0; i < tab.length; i++) {
			var $div = $('<div>');
			var $p1 = $('<p>');
			var $p2 = $('<p>');
			var $p3 = $('<p>');
            var $p4 = $('<p>');
			$p1.html(tab[i].nom_str);
			$p1.appendTo($div);
			$p2.html(tab[i].lieu_lie);
			$p2.appendTo($div);
			$p3.html(tab[i].dateDebut_str);
			$p3.appendTo($div);
            $p4.html(tab[i].description_str);
            $p4.appendTo($div);

			$div.appendTo('#liste_annonces');

		}
	}
}
