//create map
const map = L.map('mapid').setView([-8.8535063, 13.1440178], 12);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", //localizacap do nossa imagem de icon amarelo personalizado
    iconSize: [58, 68],                        // [largura, altura]
    iconAnchor: [29,68],                       //
    popAnchor: [170, 2]
})

function addMarker({  id, name, lat, lng }){

    // create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}"><img src="./images/arrow-white.svg"></a>`)

//create and add marker
L
.marker([lat,lng], { icon })
.addTo(map)
.bindPopup(popup)

}

  const orphanagesSpan = document.querySelectorAll('.orphanages span')
        
  orphanagesSpan.forEach( span =>{

            const orphanage = {
                id: span.dataset.id,
                name: span.dataset.name,
                lat: span.dataset.lat,
                lng: span.dataset.lng,
            }

            addMarker(orphanage)
          })
