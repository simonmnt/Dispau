/** 
* script jQuery pour le front DISPAU version web
*
* @date 21/04/2017
* @revision 24/04/2017
* @authors Patrick ; 
*/

jQuery(document).ready(function() {

	// Ecouteur pour les fenetres modales
	jQuery('a[href^=\\#').on('click', function(e) {
		e.preventDefault();
		if ( jQuery(this).equals('<a#recherche-lieu-fermer.close>') ) {
			jQuery(this).parent('aside').toggleClass('masked');
		} else {
			var cible = $(this).attr('data-target');
		console.log(cible);
			jQuery('#'+cible).toggleClass('visible');
		}
	});

	// Ecouteur pour la fermeture des fenetres modales
	jQuery('.close').on('click', function(e) {
		e.preventDefault;
		jQuery(this).closest('div').toggleClass('visible');
	});

}); // End ready