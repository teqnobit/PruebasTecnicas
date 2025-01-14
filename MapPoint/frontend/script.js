let map = L.map('map').setView([51.505, -0.09], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const botonActualizar = document.getElementById("actualizar");
botonActualizar.addEventListener("click", randomPoint);
// botonActualizar.onclick = randomPoint;  // Importante igualar la referencia de la funcion y no la funcion invocada (randomPoint())

let marker;
async function randomPoint() {
    // Limpiamos campos
    document.getElementById("h2-coor").textContent = "Coordenadas: ";
    document.getElementById("h2-fecha").textContent = "Fecha: ";

    const endpoint = "https://teqnobit.xyz/api/mappoint/v1/getPoint";
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        L.marker([data.lat, data.long]).addTo(map);
        document.getElementById("h2-coor").textContent += `${data.lat}, ${data.long}`;
        document.getElementById("h2-fecha").textContent += `${data.tiempo}`;
        map.setView([data.lat, data.long], 9);
    });
}
randomPoint();