
export function mostrarMapa2(ubicaciones) {

	function addMarkersToMap(map) {
		ubicaciones.then((item) => {
			item.forEach((result) => {
				map.addObject(new H.map.Marker({ lat: result.latitud, lng: result.longitud }));
			});
		});
	}

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
	window.onload = function () {
		addMarkersToMap(map);
	};
}



export function mostrarMapa(ubicaciones, latitud, longitud, zm) {
	// Parte común  -----------------------------------------------------------
	var platform = new H.service.Platform({
		apikey: 'TEwOAo-zrGY4x4fsz8YFwBK4tLdyk7wPuoicDhmRb0k',
	});
	var defaultLayers = platform.createDefaultLayers();
	var map = new H.Map(
		document.getElementById('map'), 
		defaultLayers.vector.normal.map, {
			center: { lat: latitud, lng: longitud },
			zoom: zm,
			pixelRatio: window.devicePixelRatio || 1,
		}
	);
	window.addEventListener('resize', function () {
		return map.getViewPort().resize();
	});
	var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
	var ui = H.ui.UI.createDefault(map, defaultLayers);
	// Parte común  -----------------------------------------------------------
	// Parte funcional  -------------------------------------------------------
	var group = new H.map.Group();
	map.addObject(group);
	group.addEventListener('tap', function (evt) {
		var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
			content: evt.target.getData()
		});
		ui.addBubble(bubble);
	}, false);
	// Bucle
	ubicaciones.then((item) => {
		item.forEach((result) => {
			addMarkerToGroup(group, {lat: result.latitud, lng: result.longitud},
				'<div><a href="http://localhost:8080/public/construccion.html" target="_blank"><b>' + result.catastro + '</b></a></div>' +
				'<div>' + 
					'Precio: ' + result.precio + ' € <br>' + 
					'Superficie: ' + result.area + ' m <sup>2</sup><br>' +
					'Habitaciones: ' + result.nHab + '<br>' +
					'Baños: ' + result.nBan + '<br>' +
					'Cocinas: ' + result.nCoc + '<br>' +
					'Certif. Energética: ' + result.certif + '<br>' +
					'Estado: ' + result.estado + '<br>' +
					'Tipo de Vivienda: ' + result.tpoViv + '<br>' +
				'</div>');
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
