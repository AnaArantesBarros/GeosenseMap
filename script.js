// Coordenadas iniciais para o centro do mapa
const latitude = -23.550520;
const longitude = -46.633308;
const zoomLevel = 12;

// Cria o mapa
const map = L.map('map').setView([latitude, longitude], zoomLevel);

// Adiciona um provedor de mapa
var openTopoMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Adicionando camadas ao layer control
var baseLayers = {
    "OpenStreetMap": openTopoMap
};

var overlays = {

};

L.control.layers(baseLayers, overlays).addTo(map);



