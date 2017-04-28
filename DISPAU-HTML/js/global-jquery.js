/** 
* script jQuery pour le front DISPAU version web
*
* @date 21/04/2017
* @revision 28/04/2017
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
			// ... Et toutes les autres : necessite un attribut 'data-cible' avec l'ID de l'element HTML
			var cible = $(this).attr('data-cible');
			(cible != null) ? jQuery('#'+cible).toggleClass('visible') : '';
		}
	});

	// Ecouteur pour la fermeture des fenetres modales
	jQuery('.close').on('click', function(e) {
		e.preventDefault();
		// Bascule la classe 'visible' des elements div proche du lien
		jQuery(this).closest('div').toggleClass('visible');
	});
	
	// Créé des info-bulles stylées sur les liens comportant la classe de préfixe 'tooltip'
	jQuery('a[class*=tooltip]').each(function() {
		jQuery(this).attr('data-tooltip', jQuery(this).attr('title'));
		jQuery(this).removeAttr('title');
	});

}); // End ready
