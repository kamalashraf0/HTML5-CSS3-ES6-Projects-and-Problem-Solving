


var x;
var y;

function GetMyLocation() {
    navigator.geolocation.getCurrentPosition(
        function Success(position) {
            x = parseFloat(position.coords.latitude);
            y = parseFloat(position.coords.longitude);
            initMap(x, y);
        },
        function Error(error) {
            console.error("Geolocation error: " + error.message);
        }
    );
}

let map;

async function initMap(lat, lng) {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 8,
        mapTypeId: 'roadmap'
    });
}




function ShowTable() {

    let tableBody = document.querySelector("#data-table tbody");
    let newRow = document.createElement("tr");
    let LatitudeCell = document.createElement("td");
    LatitudeCell.textContent = x;
    newRow.appendChild(LatitudeCell);

    let LongitudeCell = document.createElement("td");
    LongitudeCell.textContent = y;
    newRow.appendChild(LongitudeCell);

    var date = new Date();
    let TimeCell = document.createElement("td");
    TimeCell.textContent = date;
    newRow.appendChild(TimeCell);

    tableBody.appendChild(newRow);
    
}