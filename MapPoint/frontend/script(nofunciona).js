const textoCoor = document.getElementById("id-coor")
const textoFecha = document.getElementById("id-fecha")
const divIFrame = document.getElementById("div-iframe")
const iFrameMap = document.createElement("iframe")
// const iframeMap = document.getElementById("id-iframe-maps")
// https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=12.12345,98.76543+(My%20point)&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed

let lat
let long
let fecha
let respuestaJSON

// async function solicitudJSON() {
//     respuestaJSON = await fetch("http://127.0.0.1:8000/api/getPoint").then(response => response.json())
//     console.log(respuestaJSON)
//     lat = await respuestaJSON.lat
//     long = await respuestaJSON.long
//     fecha = await respuestaJSON.tiempo
// } solicitudJSON()
// console.log(lat, long, fecha)

fetch("http://127.0.0.1:8000/api/getPoint")
    .then(response => response.json())
    .then(data => {
        lat = data.lat
        long = data.long
        fecha = data.tiempo
        console.log(lat, long, fecha)

        // Agregamos los datos a la interfaz
        textoCoor.textContent += `${lat}, ${long}` 
        textoFecha.textContent += fecha
        console.log("esto se imprimio")

        let iFrameMapSrc = `https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${lat},${long}+(My%20point)&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`

        iFrameMap.innerHTML = 
        `
        <iframe 
            id="id-iframe-maps"
            width="100%" 
            height="600" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
        `
        iFrameMap.src = iFrameMapSrc
        divIFrame.appendChild(iFrameMap)
    })