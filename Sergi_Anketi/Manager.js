
const SayfaValue = document.getElementById("Sayfa").value

if (SayfaValue == 1) {
    localStorage.removeItem("inputValue")
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
    

    const pageUrl = (currentPage + 1) + ".html"
    
    console.log(inputValue, currentPage)
    console.log(pageUrl)

    if (localStorage.getItem("inputValue")) {

        let storedValue = Number(localStorage.getItem("inputValue"))
        const toStoreValue = Number(storedValue + inputValue)

        localStorage.setItem("inputValue", toStoreValue)

    } else {

        localStorage.setItem("inputValue", inputValue)

    }

    if (currentPage === 7) { //Son Sayfa

        window.location.replace("sonuc.html")
        return
    }

    window.location.replace(pageUrl)
    
    
    console.log("stored value = " + localStorage.getItem("inputValue"))
}


function resetLocalStorage() {
    localStorage.removeItem("inputValue")
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

        if (Sonuc_Puanı <= 29.0 && Sonuc_Puanı > 26.1) {
            console.log("29 ile 26,1");
            Sonuc_Sifati = document.getElementById("29 ile 26,1");
        } else if (Sonuc_Puanı <= 26.1 && Sonuc_Puanı > 23.2) {
            console.log("26,1 ile 23,2");
            Sonuc_Sifati = document.getElementById("26,1 ile 23,2");
        } else if (Sonuc_Puanı <= 23.2 && Sonuc_Puanı > 20.3) {
            console.log("23,2 ile 20,3");
            Sonuc_Sifati = document.getElementById("23,2 ile 20,3");
        } else if (Sonuc_Puanı <= 20.3 && Sonuc_Puanı > 17.4) {
            console.log("20,3 ile 17,4");
            Sonuc_Sifati = document.getElementById("20,3 ile 17,4");
        } else if (Sonuc_Puanı <= 17.4 && Sonuc_Puanı > 14.5) {
            console.log("17,4 ile 14,5");
            Sonuc_Sifati = document.getElementById("17,4 ile 14,5");
        } else if (Sonuc_Puanı <= 14.5 && Sonuc_Puanı > 11.6) {
            console.log("14,5 ile 11,6");
            Sonuc_Sifati = document.getElementById("14,5 ile 11,6");
        } else if (Sonuc_Puanı <= 11.6 && Sonuc_Puanı > 8.7) {
            console.log("11,6 ile 8,7");
            Sonuc_Sifati = document.getElementById("11,6 ile 8,7");
        } else if (Sonuc_Puanı <= 8.7 && Sonuc_Puanı > 5.8) {
            console.log("8,7 ile 5,8");
            Sonuc_Sifati = document.getElementById("8,7 ile 5,8");
        } else if (Sonuc_Puanı <= 5.8 && Sonuc_Puanı > 2.9) {
            console.log("5,8 ile 2,9");
            Sonuc_Sifati = document.getElementById("5,8 ile 2,9");
        } else if (Sonuc_Puanı <= 2.9 && Sonuc_Puanı >= 0) {
            console.log("2,9 ile 0");
            Sonuc_Sifati = document.getElementById("2,9 ile 0");
        } else {
            console.log("Sonuc_Puanı is out of the specified ranges.");
            console.log(Sonuc_Puanı);
        }


        //"29 ile 26,1"
        //"26,1 ile 23,2"
        //"23,2 ile 20,3"
        //"20,3 ile 17,4"
        //"17,4 ile 14,5"
        //"14,5 ile 11,6"
        //"11,6 ile 8,7"
        //"8,7 ile 5,8"
        //"5,8 ile 2,9"
        //"2,9 ile 0"


        if (Sonuc_Sifati) {
            console.log(Sonuc_Sifati.innerHTML)
            Sonuc_Sifati.className = "Selected"
        }

        Puan.innerHTML = "Puanınız: " + Sonuc_Puanı

        let Ortalama_Sonuc_Puanı = Number(localStorage.getItem("Ortalama_Sonuc_Puanı"))
        let Oynayan_Sayısı = Number(localStorage.getItem("Oynayan_Sayısı"))

        if (Ortalama_Sonuc_Puanı) {
            localStorage.setItem("Ortalama_Sonuc_Puanı", Ortalama_Sonuc_Puanı + Sonuc_Puanı)
        } else {
            localStorage.setItem("Ortalama_Sonuc_Puanı",Sonuc_Puanı)
        }



        if (Oynayan_Sayısı) {
            localStorage.setItem("Oynayan_Sayısı", 1 + Oynayan_Sayısı)
        } else {
            localStorage.setItem("Oynayan_Sayısı",1)
        }

        console.log(localStorage.getItem("Ortalama_Sonuc_Puanı"))
        console.log(localStorage.getItem("Oynayan_Sayısı"))

        const Ortalama_Puan = Math.round( Number(localStorage.getItem("Ortalama_Sonuc_Puanı")) / Number(localStorage.getItem("Oynayan_Sayısı")) )
    
        let Ortalama_Puan_Kısmı = document.getElementById("Ortalama_Puan")

        Ortalama_Puan_Kısmı.innerHTML = "Ortalama Puan: " + Ortalama_Puan

}



window.addEventListener('load', function () {
    if (SayfaValue == "son") {
    console.log("stored value = " + localStorage.getItem("inputValue")) //Normalde ha burada sonuç kısmı olacak ve sıralamasını gösterecek

    Sonuc_Fonksiyonu()


    }
});



