coordinates = [];

function point(geom) {
        var coordinate = new google.maps.LatLng(geom.geometry.y, geom.geometry.x);
        var marker = new google.maps.Marker({
            position: coordinate,
            map: map,
            title: geom.attributes.nome
        });
        coordinates.push(marker)
}

function parseParquesEolicosJSON() {
    $.getJSON('eolica/parqueseolicos.json', function(data) {
        $.each(data.features, function(key, val) {
            point(val);
        });
    });
}

function removeMarkers(){
    for(i=0; i< coordinates.length; i++){
        coordinates[i].setMap(null);
    }
}