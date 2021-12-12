function iniciarMapa() {
    var coord = {lat:40.416729 ,lng: -3.7037902};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: coord
    })

    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}