function polygon(geom) {
    var pointCount = geom.rings[0].length;
    var areaPath = [];
    for (var i=0; i < pointCount; i++) {
        var tempLatLng = new google.maps.LatLng(geom.rings[0][i][1], geom.rings[0][i][0]);
        areaPath.push(tempLatLng);
    }

    var polygonOptions = {
        paths: areaPath,
        strokeColor: '#2F4F4F',
        strokeOpacity: 0.9,
        strokeWeight: 1,
        fillColor: '#FFFF00',
        fillOpacity: 0.20,
        map: map
    };

    var polygon = new google.maps.Polygon(polygonOptions);
}

function parseAreaMunicipalJSON() {
    $.getJSON('municipios/limite_municipal.json', function(data) {
        $.each(data.features, function(key, val) {
            polygon(val.geometry);
        });
    });
}