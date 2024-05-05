
const SayfaValue = document.getElementById("Sayfa").value

if (SayfaValue == 1) {
    localStorage.clear()
}



function getAllInputs() {
    const inputs = document.querySelectorAll('input');
    return inputs;
}

const allInputs = getAllInputs()

allInputs.forEach(input => {
    input.addEventListener('click', () => {
        onClicked(input)
    });
})

function onClicked(input) {

    const inputValue = Number(input.value)

    const currentPage = Number(document.getElementById("Sayfa").value)
    
    if (currentPage === 12) { //Son Sayfa

        window.location.replace("sonuc.html")
        return
    }

    const pageUrl = (currentPage + 1) + ".html"
    
    console.log(inputValue, currentPage)
    console.log(pageUrl)

    window.location.replace(pageUrl)

    if (localStorage.getItem("inputValue")) {

        let storedValue = Number(localStorage.getItem("inputValue"))
        const toStoreValue = Number(storedValue + inputValue)

        localStorage.setItem("inputValue", toStoreValue)

    } else {

        localStorage.setItem("inputValue", inputValue)

    }
    
    
    console.log("stored value = " + localStorage.getItem("inputValue"))
}


function resetLocalStorage() {
    localStorage.clear();
}


const geriDönButonu = document.getElementById("Geri_Dön_Butonu");

function geriDön() {
    
    resetLocalStorage()

    window.location.replace("index.html");

}

if (geriDönButonu) {
geriDönButonu.addEventListener("click", geriDön);
}



function Sonuc_Fonksiyonu() {

    const Sonuc_Puanı = Number(localStorage.getItem("inputValue"));
    
    let Sonuc_Sifati = null

    if (Sonuc_Puanı <= 45.0 && Sonuc_Puanı > 40.5) {
        console.log("45,0 ile 40,5");
        Sonuc_Sifati = document.getElementById("45,0 ile 40,5")
    } else if (Sonuc_Puanı <= 40.5 && Sonuc_Puanı > 36.0) {
        console.log("40,5 ile 36,0");
        Sonuc_Sifati = document.getElementById("40,5 ile 36,0")
    } else if (Sonuc_Puanı <= 36.0 && Sonuc_Puanı > 31.5) {
        console.log("36,0 ile 31,5");
        Sonuc_Sifati = document.getElementById("36,0 ile 31,5")
    } else if (Sonuc_Puanı <= 31.5 && Sonuc_Puanı > 27.0) {
        console.log("31,5 ile 27,0");
        Sonuc_Sifati = document.getElementById("31,5 ile 27,0")
    } else if (Sonuc_Puanı <= 27.0 && Sonuc_Puanı > 22.5) {
        console.log("27,0 ile 22,5");
        Sonuc_Sifati = document.getElementById("27,0 ile 22,5")
    } else if (Sonuc_Puanı <= 22.5 && Sonuc_Puanı > 18.0) {
        console.log("22,5 ile 18,0");
        Sonuc_Sifati = document.getElementById("22,5 ile 18,0")
    } else if (Sonuc_Puanı <= 18.0 && Sonuc_Puanı > 13.5) {
        console.log("18,0 ile 13,5");
        Sonuc_Sifati = document.getElementById("18,0 ile 13,5")
    } else if (Sonuc_Puanı <= 13.5 && Sonuc_Puanı > 9.0) {
        console.log("13,5 ile 9,0");
        Sonuc_Sifati = document.getElementById("13,5 ile 9,0")
    } else if (Sonuc_Puanı <= 9.0 && Sonuc_Puanı > 4.5) {
        console.log("9,0 ile 4,5");
        Sonuc_Sifati = document.getElementById("9,0 ile 4,5")
    } else if (Sonuc_Puanı <= 4.5 && Sonuc_Puanı >= 0) {
        console.log("4,5 ile 0");
        Sonuc_Sifati = document.getElementById("4,5 ile 0")
    } else {
        console.log("Sonuc_Puanı is out of the specified ranges.");
        console.log(Sonuc_Puanı)
    }

        //"45,0 ile 40,5"
        //"40,5 ile 36,0"
        //"36,0 ile 31,5"
        //"31,5 ile 27,0"
        //"27,0 ile 22,5"
        //"22,5 ile 18,0"
        //"18,0 ile 13,5"
        //"13,5 ile 9,0"
        //"9,0 ile 4,5"
        //"4,5 ile 0"


        if (Sonuc_Sifati) {
            console.log(Sonuc_Sifati.innerHTML)
            Sonuc_Sifati.className = "Selected"
        }

        Puan.innerHTML = "Puanınız: " + Sonuc_Puanı

}



window.addEventListener('load', function () {
    if (SayfaValue == "son") {
    console.log("stored value = " + localStorage.getItem("inputValue")) //Normalde ha burada sonuç kısmı olacak ve sıralamasını gösterecek

    Sonuc_Fonksiyonu()


    }
});



