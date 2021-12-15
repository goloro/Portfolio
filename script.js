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

document.getElementById("BarraMenuRes").addEventListener("click", function() {
    document.getElementById("subMenuRes").classList.toggle("showMenuRes")
    // document.querySelector(".subBody").classList.toggle("filtro")
    // let menu = document.getElementById("subMenuRes")
    // if ( menu.style.display != "none") {
    //     menu.style.display = "flex"
    // } else {
    //     menu.style.display = "none"
    // }
})

document.querySelector(".itemRes").addEventListener("click", function() {
    // document.querySelector(".subBody").classList.toggle("filtro")
    document.getElementById("subMenuRes").classList.toggle("showMenuRes")
    // document.getElementById("subMenuRes").style.display = "none"
})

setTimeout(function() {
    document.getElementById("inicio").style.display = "none"
    document.getElementById("subBody").style.display = "flex"
}, 2000)