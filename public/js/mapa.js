export function mostrarMapa2() {
	var platform = new H.service.Platform({
		apikey: 'TEwOAo-zrGY4x4fsz8YFwBK4tLdyk7wPuoicDhmRb0k',
	});
	var defaultLayers = platform.createDefaultLayers();
	//Step 2: initialize a map - this map is centered over Europe
	var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
		center: { lat: 39.47024, lng: -0.3768049 },
		zoom: 12,
		pixelRatio: window.devicePixelRatio || 1,
	});
	// add a resize listener to make sure that the map occupies the whole container
	window.addEventListener('resize', function () {
		return map.getViewPort().resize();
	});
	//Step 3: make the map interactive
	// MapEvents enables the event system
	// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
	var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
	// Create the default UI components
	var ui = H.ui.UI.createDefault(map, defaultLayers);
	// Now use the map as required...
	window.onload = function () {};
}

export function mostrarMapa(ubicaciones) {
	// Parte común  -----------------------------------------------------------
	var platform = new H.service.Platform({
		apikey: 'TEwOAo-zrGY4x4fsz8YFwBK4tLdyk7wPuoicDhmRb0k',
	});
	var defaultLayers = platform.createDefaultLayers();
	var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
		center: { lat: 39.47024, lng: -0.3768049 },
		zoom: 12,
		pixelRatio: window.devicePixelRatio || 1,
	});
	window.addEventListener('resize', function () {
		return map.getViewPort().resize();
	});
	var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
	var ui = H.ui.UI.createDefault(map, defaultLayers);
	// Parte común  -----------------------------------------------------------
	// Parte funcional  -------------------------------------------------------
	var group = new H.map.Group();
	map.addObject(group);
	group.addEventListener(
		'tap',
		function (evt) {
			var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
				content: evt.target.getData(),
			});
			ui.addBubble(bubble);
		},
		false
	);
	// Bucle
	ubicaciones.then((item) => {
		item.forEach((result) => {
			addMarkerToGroup(
				group,
				{ lat: result.latitud, lng: result.longitud },
				'<div><a href="http://localhost:8080/public/construccion.html" target="_blank"><b>' +
					result.catastro +
					'</b></a></div>' +
					'<div>' +
					'Precio: ' +
					result.precio +
					' € <br>' +
					'Superficie: ' +
					result.area +
					' m <sup>2</sup><br>' +
					'Habitaciones: ' +
					result.nHab +
					'<br>' +
					'Baños: ' +
					result.nBan +
					'<br>' +
					'Cocinas: ' +
					result.nCoc +
					'<br>' +
					'Certif. Energética: ' +
					result.certif +
					'<br>' +
					'Estado: ' +
					result.estado +
					'<br>' +
					'Tipo de Vivienda: ' +
					result.tpoViv +
					'<br>' +
					'</div>'
			);
		});
	});
	// Parte funcional  -------------------------------------------------------
}

function addMarkerToGroup(group, coordinate, html) {
	var marker = new H.map.Marker(coordinate);
	// add custom data to the marker
	marker.setData(html);
	group.addObject(marker);
}
