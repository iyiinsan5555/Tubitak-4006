const Observer = new IntersectionObserver((Entries) => {
    Entries.forEach((Entry) => {
        console.log(Entry)
        if (Entry.isIntersecting) {
            Entry.target.classList.add("Show");
        } else {
            Entry.target.classList.remove("Show");
        }
    });
});


const HiddenElements = document.querySelectorAll(".Konu_Grubu");
HiddenElements.forEach((el) => Observer.observe(el));