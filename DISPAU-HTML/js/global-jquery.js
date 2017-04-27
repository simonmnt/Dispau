/** 
* script jQuery pour le front DISPAU version web
*
* @date 21/04/2017
* @revision 24/04/2017
* @authors Patrick ; 
*/

jQuery(document).ready(function() {

	// Ecouteur sur tous les liens liés à l'ouverture des fenêtres modales
	jQuery('a[href^=\\#').on('click', function(e) {
		e.preventDefault();
		// Celle de recherche pour appliquer l'effet d'animation
		if ( jQuery(this).hasClass('recherche-lieu') ) {
			jQuery(this).parent('aside').toggleClass('masked');
		} else {
			// ... Et toutes les autres
			var cible = $(this).attr('data-cible');
			(cible != null) ? jQuery('#'+cible).toggleClass('visible') : '';
		}
	});

	// Ecouteur pour la fermeture des fenetres modales
	jQuery('.close').on('click', function(e) {
		e.preventDefault;
		jQuery(this).closest('div').toggleClass('visible');
	});

}); // End ready
