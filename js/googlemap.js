
var myLocation = new google.maps.LatLng(12.929144023930109,80.13070464134216)
var map;

function initialize() {
  var mapProp = {
  
    center:myLocation,
    zoom:18,
	panControl:false,
    zoomControl:false,
    mapTypeControl:false,
    scaleControl:false,
    streetViewControl:false,
    overviewMapControl:false,
    rotateControl:false,
	disableDoubleClickZoom: false,
	mapTypeId:google.maps.MapTypeId.ROADMAP
  };
   map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
google.maps.event.addDomListener(window, 'load', initialize);

loadMarker();
}

function loadMarker(){
	var marker=new google.maps.Marker({
  position:myLocation,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
}