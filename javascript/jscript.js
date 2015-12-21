function init(){
	menuPositionInit();
	anchorScrollInit();
	getMap()
}

function menuPositionInit(){
	
	$(window).bind('scroll',
		function (){
		
			if ($(window).scrollTop() > 210) {
				$('#menu').addClass('fixed_menu');
			} else {
				$('#menu').removeClass('fixed_menu');
			}
		}
	);
}

function anchorScrollInit(){

	var param;

	$('a').click(function(){

		if ( $(window).width() > 960 ){
			param = 0;
		}else{
			param = -75;
		}

		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top + param
		}, 750);
		return false;
	});
}

function getMap(){

	// Set the map and view options, setting the map style to Road and
	//    removing the user's ability to change the map style

		//Microsoft.Maps.loadModule('Microsoft.Maps.Themes.BingTheme', { callback: themesModuleLoaded });

		// Initialize the map

		//function themesModuleLoaded(){

			var mapOptions = {

				credentials:"AmFOF8ws-ScT_kJAtXWpeaBtrBgleOiN546KFwoPOmqAjan7IlMPxq11Dju7SQHb",
				mapTypeId: Microsoft.Maps.MapTypeId.road,
				showDashboard: true,
				showScalebar: true,
				showMapTypeSelector: false,
				showCopyright: false,
				enableSearchLogo: false,
				disablePanning: false,
				disableZooming: true,
				enableHighDpi: true,
				backgroundColor: new Microsoft.Maps.Color('#272d3a')
				//theme: new Microsoft.Maps.Themes.BingTheme()
			};

			var map = new Microsoft.Maps.Map(document.getElementById("contacts_map"), mapOptions);

			var loc = new Microsoft.Maps.Location(50.455936, 30.611898);
			map.setView( {center:loc, zoom:16});

			//var pin = new Microsoft.Maps.Pushpin(loc, {text: ''});
			var pin = new Microsoft.Maps.Pushpin(loc, {icon: 'images/poi_search.png', width: 25, height: 39, draggable: true});

			map.entities.push(pin);

		//}

}
