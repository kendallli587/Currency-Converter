// Global Variables
let submitBtnEl = document.getElementById("submitBtn");
let currenciesEl = document.getElementById("currencies");


submitBtnEl.addEventListener("click", checkvalue);

function checkvalue() {
    let currencyInput = currenciesEl.value;

    if (currencyInput == "CAD") {
        console.log("User chose CAD")
    } else if (currencyInput == "USD") {
        console.log("User chose USD")
    } else if (currencyInput == "EUR") {
        console.log("User chose EUR")
    } else if (currencyInput == "JPY") {
        console.log("User chose JPY")
    } else if (currencyInput == "GBP") {
        console.log("User chose GBP")
    }
}

