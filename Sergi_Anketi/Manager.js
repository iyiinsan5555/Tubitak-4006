
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
    
    if (currentPage === 7) { //Son Sayfa

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

    if (Sonuc_Puanı <= 28.0 && Sonuc_Puanı > 25.2) {
        console.log("28 ile 25,2");
        Sonuc_Sifati = document.getElementById("28 ile 25,2")
    } else if (Sonuc_Puanı <= 25.2 && Sonuc_Puanı > 22.4) {
        console.log("25,2 ile 22,4");
        Sonuc_Sifati = document.getElementById("25,2 ile 22,4")
    } else if (Sonuc_Puanı <= 22.4 && Sonuc_Puanı > 19.6) {
        console.log("22,4 ile 19,6");
        Sonuc_Sifati = document.getElementById("22,4 ile 19,6")
    } else if (Sonuc_Puanı <= 19.6 && Sonuc_Puanı > 16.8) {
        console.log("19,6 ile 16,8");
        Sonuc_Sifati = document.getElementById("19,6 ile 16,8")
    } else if (Sonuc_Puanı <= 16.8 && Sonuc_Puanı > 14) {
        console.log("16,8 ile 14");
        Sonuc_Sifati = document.getElementById("16,8 ile 14,0")
    } else if (Sonuc_Puanı <= 14.0 && Sonuc_Puanı > 11.2) {
        console.log("14,0 ile 11,2");
        Sonuc_Sifati = document.getElementById("14,0 ile 11,2")
    } else if (Sonuc_Puanı <= 11.2 && Sonuc_Puanı > 8.4) {
        console.log("11,2 ile 8,4");
        Sonuc_Sifati = document.getElementById("11,2 ile 8,4")
    } else if (Sonuc_Puanı <= 8.4 && Sonuc_Puanı > 5.6) {
        console.log("8,4 ile 5,6");
        Sonuc_Sifati = document.getElementById("8,4 ile 5,6")
    } else if (Sonuc_Puanı <= 5.6 && Sonuc_Puanı > 2.8) {
        console.log("5,6 ile 2,8");
        Sonuc_Sifati = document.getElementById("5,6 ile 2,8")
    } else if (Sonuc_Puanı <= 2.8 && Sonuc_Puanı >= 0) {
        console.log("2,8 ile 0");
        Sonuc_Sifati = document.getElementById("2,8 ile 0")
    } else {
        console.log("Sonuc_Puanı is out of the specified ranges.");
        console.log(Sonuc_Puanı)
    }

        //28 ile 25,2
        //25,2 ile 22,4
        //22,4 ile 19,6
        //19,6 ile 16,8
        //16,8 ile 14
        //14 ile 11,2
        //11,2 ile 8,4
        //8,4 ile 5,6
        //5,6 ile 2,8
        //2,8 ile 0


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



