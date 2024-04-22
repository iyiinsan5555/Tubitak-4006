
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
    
    //console.log(inputValue, currentPage)
    //console.log(pageUrl)

    //window.location.replace(pageUrl)

    if (localStorage.getItem("inputValue")) {

        let storedValue = Number(localStorage.getItem("inputValue"))
        const toStoreValue = Number(storedValue + inputValue)

        localStorage.setItem("inputValue", toStoreValue)

    } else {

        localStorage.setItem("inputValue", inputValue)

    }
    
    
    console.log("stored value = " + localStorage.getItem("inputValue"))
}


