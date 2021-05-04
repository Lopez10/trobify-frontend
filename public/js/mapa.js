export function mostrarMapa(ubicaciones, latitud, longitud, zm, unico) {
	// Parte común  -----------------------------------------------------------
	var platform = new H.service.Platform({
		apikey: 'TEwOAo-zrGY4x4fsz8YFwBK4tLdyk7wPuoicDhmRb0k',
	});
	var defaultLayers = platform.createDefaultLayers();
	var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
		center: { lat: latitud, lng: longitud },
		zoom: zm,
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
		if (unico === true) {
			crearPuntero(item);
		} else {
			item.forEach((result) => {
				crearPuntero(result);
			});
		}
	});

	function crearPuntero(item) {
		addMarkerToGroup(
			group,
			{ lat: item.latitud, lng: item.longitud },
			'<div><a href="http://localhost:8080/public/inmueble.html' +
				'?catastro=' +
				item.id_catastro +
				'&modo=' +
				item.id_modalidad +
				'" target="_blank"><b>Enlace</b></a></div>' +
				'<div>' +
				'Precio: ' +
				item.precio +
				' € <br>' +
				'</div>'
		);
	}
	// Parte funcional  -------------------------------------------------------
}

function addMarkerToGroup(group, coordinate, html) {
	var marker = new H.map.Marker(coordinate);
	// add custom data to the marker
	marker.setData(html);
	group.addObject(marker);
}
