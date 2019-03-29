function line(geom) {
  var pointCount = geom.paths[0].length;
  var linePath = [];
  for (var i=0; i < pointCount; i++) {
      var tempLatLng = new google.maps.LatLng(geom.paths[0][i][1], geom.paths[0][i][0]);
      linePath.push(tempLatLng);
  }

  var lineOptions = {
      path: linePath,
      strokeWeight: 2,
      strokeColor: '#19A3FF',
      strokeOpacity: 0.8,
      map: map
  };
  var polyline = new google.maps.Polyline(lineOptions);
}

function parseBrsJSON() {
  $.getJSON('vias/br/brs.json', function(data) {
      $.each(data.features, function(key, val) {
          line(val.geometry);
      });
  });
}