// Map View
var mymap = L.map('mapid').setView([51.9, 10.26], 2);

// load map
L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, '+
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '+
            'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoidXNlcjE0MjM1IiwiYSI6ImNrNWUwYnluajAwMjYzb3J1b2g4aXEya2MifQ.02rubYiNyjonYdsN3mUf3w'
    })
    .addTo(mymap);

L.Control.geocoder({ collapsed: false }).addTo(mymap);


// -----------------------------------------------



var markerIcon = L.icon({
    iconUrl: 'newPin.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-3, -76], 
});

var countryIcon = L.icon({
    iconUrl: 'countryPin.png',
    iconSize: [20, 20],
    iconAnchor: [8, 20],
    popupAnchor: [-3, -76], 
});

var myPositionIcon = L.icon({
    iconUrl: 'myPosition.png',
    iconSize: [25, 25],
    iconAnchor: [17, 17],
    popupAnchor: [-3, -76], 
});

var emptyIcon = L.icon({
    iconUrl: 'leer.png',
    iconSize: [25, 25],
    iconAnchor: [17, 17],
    popupAnchor: [-3, -76], 
});



// -----------------------------------------------



var x = document.getElementById("locationId");


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
     }
}

var coord1
var coord2

function showPosition(position){
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    this.coord1 = position.coords.latitude;
    this.coord2 = position.coords.longitude;
    L.marker([coord1, coord2], {icon: myPositionIcon}).bindPopup('Your Location').addTo(mymap);
    
}


function showCountries(){
    india = L.marker([20.5937, 78.9629], {icon: countryIcon}).bindPopup('India').addTo(mymap);
    usa = L.marker([39.7837304, -100.4458825], {icon: countryIcon}).bindPopup('USA').addTo(mymap),
    australia = L.marker([-24.7761086, 134.755], {icon: countryIcon}).bindPopup('Australien').addTo(mymap),
    france = L.marker([46.603354,1.8883335], {icon: countryIcon}).bindPopup('Frankreich').addTo(mymap),
    schweden = L.marker([59.6749712,14.5208584], {icon: countryIcon}).bindPopup('Schweden').addTo(mymap),
    italian = L.marker([42.6384261,12.674297], {icon: countryIcon}).bindPopup('Italien').addTo(mymap),
    russia = L.marker([64.6863136,97.7453061], {icon: countryIcon}).bindPopup('Russland').addTo(mymap),
    iceland = L.marker([64.9841821, -18.1059013], {icon: countryIcon}).bindPopup('Island').addTo(mymap),
    senegal = L.marker([14.4750607,-14.4529612], {icon: countryIcon}).bindPopup('Senegal').addTo(mymap),
    kenia = L.marker([1.4419683,38.4313975], {icon: countryIcon}).bindPopup('Kenia').addTo(mymap),
    peru = L.marker([-6.8699697,-75.0458515], {icon: countryIcon}).bindPopup('Peru').addTo(mymap),
    china = L.marker([35.000074,104.999927], {icon: countryIcon}).bindPopup('China').addTo(mymap);
}

function fsearch(){
    document.getElementById("searchBox")
    search()
    document.getElementById("searchBox") = ''
}

function search(){
    console.log="Click!!"
}