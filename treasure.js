var treasureLocation = Math.floor(Math.random() * 15) //2


var bombLocation = Math.floor(Math.random() * 15) //3


if (bombLocation === treasureLocation) {
    treasureLocation = treasureLocation + 1
}

const treasure = (location) => {
    //document.getElementById(location).innerHTML = "☠️"
    if (location === treasureLocation) {
        
        document.getElementById(location).innerHTML = "🪙"
        alert("You won!")

    } else if (location === bombLocation) {

        document.getElementById(location).innerHTML = "💣"
        alert("You lost")
    } else {
        document.getElementById(location).innerHTML = "☠️"
    }      
}