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

// Función menu responsive
const menuRes = document.getElementById("barraMenuRes")
menuRes.addEventListener("click", function() {  
    let subMenu = document.getElementById("subMenuRes")
    let display = subMenu.style.display
    if (display == "flex") {
        MenuBlack(subMenu)
    }
    else {
        MenuWhite(subMenu)
    }
})

document.getElementById("subMenuRes").addEventListener("click", e => {
    alert(e.target.tagName)
    if (e.target.tagName == "P")
        MenuBlack(document.getElementById("subMenuRes"))
})

function MenuBlack(subMenu) {
    subMenu.style.display = "none"
    document.querySelector("nav").style.backgroundColor = "#1C1B24"
    document.getElementById("logoNavImg").src = "Images/logo_glr_blue.png"
    document.getElementById("nombreNav").style.color = "white"
    menuRes.src = "Images/menu.svg"
}
function MenuWhite(subMenu) {
    subMenu.style.display = "flex"
    document.querySelector("nav").style.backgroundColor = "white"
    document.getElementById("logoNavImg").src = "Images/logo_glr_dark.png"
    document.getElementById("nombreNav").style.color = "#1C1B24"
    menuRes.src = "Images/menu_dark.svg" 
}