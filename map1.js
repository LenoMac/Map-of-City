// DG.then(function () {
//     var map,
//         map = DG.map('map', {
//             center: [42.854921, 74.595743],
//             zoom: 13,
//         });

//     // document.getElementById('define').addEventListener("click", function (event) {
//     //     event.preventDefault()
//     //     if ("geolocation" in navigator) {
//     //         navigator.geolocation.getCurrentPosition(
//     //             function (position) {
//     //                 var lat = position.coords.latitude;
//     //                 var lng = position.coords.longitude;
//     //                 DG.circle([lat, lng], 50, { color: 'blue' }).addTo(map);
//     //                 console.log("Широта: " + lat + ", Долгота: " + lng);
//     //             },
//     //             function (error) {
//     //                 console.error("Ошибка получения геопозиции: " + error.message);
//     //             }
//     //         );
//     //     } else {
//     //         alert(new Error("Геолокация не поддерживается этим браузером"));
//     //     }
//     // })

//     // var test = true
//     // polygon.addEventListener("click", function () {
//     //     let info = document.getElementById('info'),
//     //         mapp = document.getElementById('map')
//     //     if (test) {
//     //         mapp.style.width = '75%'
//     //         info.style.left = '0'
//     //         test = false
//     //     }
//     //     else {
//     //         mapp.style.width = '100%'
//     //         info.style.left = '-100%'
//     //         test = true
//     //     }

//     // })
// });

var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.854921, 74.595743],
        zoom: 13,
        zoomControl: false,
        fullscreenControl: false,
    });

    DG.circle([42.84619, 74.58617], 20, { color: 'red' }).addTo(map);
    DG.marker([42.84619, 74.58617]).addTo(map).bindPopup('Проблемный участок №1');
});