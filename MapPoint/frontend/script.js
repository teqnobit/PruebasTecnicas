let map = L.map('map').setView([51.505, -0.09], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker;
fetch("http://127.0.0.1:8000/api/getPoint")
    .then(response => response.json())
    .then(data => {
        L.marker([data.lat, data.long]).addTo(map);
        document.getElementById("h2-coor").textContent += `${data.lat}, ${data.long}`;
        document.getElementById("h2-fecha").textContent += `${data.tiempo}`;
        map.setView([data.lat, data.long], 9);
    });