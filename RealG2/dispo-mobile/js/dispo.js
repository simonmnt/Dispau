/* dispo.js */

(function($) {

	$('.carousel').carousel({
  		interval: false
	});

	$("#btn-parameters").click(function() {
		// toggle class .para-open
		$('#parameters').toggleClass("para-open");
	}); 

	$("#btn-infos").click(function() {
		// toggle class .annonce-infos-open
		$('#annonce-infos').toggleClass("annonce-infos");
	});

	$("#btn-home a").click(function() {
		// toggle class .para-open
		$('#parameters').toggleClass("para-open");
	});
	
})(jQuery);


function toggleClass(element, className){
    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

/*
document.getElementById('btn-parameters').addEventListener('click', function() {
    toggleClass(document.getElementById('parameters'), 'para-open');
});

document.getElementById('btn-infos').addEventListener('click', function() {
    toggleClass(document.getElementById('annonce-infos'), 'annonce-infos-open');
});

document.querySelectorAll('home-icon').addEventListener('click', function() {
    //toggleClass(document.getElementById('parameters'), 'para-open');
    alert("OK");
});
*/
