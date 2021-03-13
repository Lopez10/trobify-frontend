/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
 function addMarkersToMap(map) {

    map.addObject(new H.map.Marker({lat:39.4824580556214, lng:-0.3605097019263287}));

    map.addObject(new H.map.Marker({lat:39.4824580556214, lng:-0.3605097019263287}));

    map.addObject(new H.map.Marker({lat:39.461720317273375, lng:-0.36648071565416274}));

    map.addObject(new H.map.Marker({lat:39.47196011110214, lng:-0.4141619307622086}));
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: 'TEwOAo-zrGY4x4fsz8YFwBK4tLdyk7wPuoicDhmRb0k'
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  addMarkersToMap(map);
}


  
   