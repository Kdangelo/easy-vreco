$( document ).ready(function(){
  $(".button-collapse").sideNav();
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAlpaezibmVsHwV3d2Vf3c68pJkOMdtX-I",
  authDomain: "easy-vreco-fd710.firebaseapp.com",
  databaseURL: "https://easy-vreco-fd710.firebaseio.com",
  projectId: "easy-vreco-fd710",
  storageBucket: "",
  messagingSenderId: "45104016066"
};
firebase.initializeApp(config);

// Google maps
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: -33.45, lng: -70.6667},
    zoom: 15
  });

  // trazar ruta
  var inputPartida = document.getElementById('punto-partida');
  var inputDestino = document.getElementById('punto-destino');

  new google.maps.places.Autocomplete(inputPartida);
  new google.maps.places.Autocomplete(inputDestino);

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var calculateAndDisplayRoute = function(directionsService, directionsDisplay){
    directionsService.route({
      origin: inputPartida.value,
      destination: inputDestino.value,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('No encontramos una ruta.');
        }
      });
 }
 directionsDisplay.setMap(map);
 
 // trazar ruta 2
 var inputPartida2 = document.getElementById('punto-partida2');
 var inputDestino2 = document.getElementById('punto-destino2');

 new google.maps.places.Autocomplete(inputPartida2);
 new google.maps.places.Autocomplete(inputDestino2);

 var directionsService = new google.maps.DirectionsService;
 var directionsDisplay = new google.maps.DirectionsRenderer;

 var calculateAndDisplayRoute = function(directionsService, directionsDisplay){
   directionsService.route({
     origin: inputPartida2.value,
     destination: inputDestino2.value,
     travelMode: 'DRIVING'
   }, function(response, status) {
     if (status === 'OK') {
       directionsDisplay.setDirections(response);
     } else {
       window.alert('No encontramos una ruta.');
       }
     });
}
directionsDisplay.setMap(map);
 var trazarRuta = function() {
   calculateAndDisplayRoute(directionsService, directionsDisplay);
 };
 document.getElementById('trazar-ruta').addEventListener('click', trazarRuta);
 document.getElementById('trazar-ruta2').addEventListener('click', trazarRuta);
} 
