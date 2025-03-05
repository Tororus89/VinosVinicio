function reservarTourPopUp(){
    const reservarTourPopUp = document.getElementById("successPopUp");
    reservarTourPopUp.style.display = "flex";
    reservarTourPopUp.style.justifyContent = "center";
    reservarTourPopUp.style.alignItems = "center";
    reservarTourPopUp.style.opacity = "1";

}

function closePopUp(){
    document.getElementById("successPopUp").style.display = "none";
    document.getElementById("successPopUp").style.opacity = "0";
}