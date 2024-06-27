/* Laitan vaikuttavat koodipätkät omiin osioihin numeroiden mukaan */


/* Const */

const kuvaBoxi = document.getElementById("imgPath"); /* const alkuun, koska addEventListenerit käyttävät tätä, jos laittaa vasta niiden jälkeen niin tulee error 

/* 1) Kuvan vaihto dropbox / forms avulla  ---- Tässä oli monia eri suosituksia, jotkut laittoivat arrayn ja loopin avulla, mutta tämä toimi itselläni parhaiten  */

document.addEventListener("DOMContentLoaded", function() {
    const imageSelect = document.getElementById("imageSelect");
    const displayedImage = document.getElementById("imgPath");
    const imageFolderPath = 'img/';

    imageSelect.addEventListener("change", function() {
        const selectedImage = imageSelect.value;
        displayedImage.src = imageFolderPath + selectedImage;
    });

});


/* 2)  Kuvan suurennus ja pienennys-- yksinkertaiset funktiot, joka vain muokkaa style kautta kuvaa suuremmaksi tai pienemmäksi riippuen osoittimen sijainnista. Mukana myös tyhjennys ominaisuus */


function kuvaSuurennus(event) {
    event.target.style.width = "300px";
    
}
function kuvaPienennys(event) {

    event.target.style.width = "150px";
    document.getElementById("noticeList").innerHTML ="";   // tyhjentää HTML osion kohdasta "noticeList". noticeList on <ul>, joten sen alla olevat <il> korvataan tyhjällä
}

kuvaBoxi.addEventListener("mouseover", kuvaSuurennus);  // näillä kahdella suoritetaan edelliset funktiot riippuen osoittimen sijainnista
kuvaBoxi.addEventListener("mouseout", kuvaPienennys);

/* 3) Listan lisäys kuvan alle kun kuvaa painetaan hiirellä */ 

kuvaBoxi.addEventListener("click", omalista);  // tällä suoritetaan omalista functio, joka luo 3 <li> elementtiä ja lisää niihen tekstin kun kuvaa clickaa

    function omalista(){
    const frag = document.createDocumentFragment();

    for(let x = 0; x < 3; x++) {     // simppeli loop joka määrittää montako listaa tehdään
        let li = document.createElement("li");  // li elementtien teko 
        li.innerHTML = "Kuva pienenee jos siirrät osoittimen pois sen päältä"; // tekstin laitto listaan
        frag.appendChild(li);  // siirtää const frag let li (elikkä yksittäisiin lista kohtiin) listan 
    }
    noticeList.appendChild(frag);  //siirtää frag, joka sisältää li elementit   ul elementin alle
}





    


