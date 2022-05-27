// Currency Converter

// can use Math.round(num * 100) / 100
// or num = num.toFixed(2);

// Global Variables
let currenciesInputEl = document.getElementById("currenciesInput");
let currenciesOutputEl = document.getElementById("currenciesOutput");
let submitBtnEl = document.getElementById("submitBtn");
let resultEl = document.getElementById("result");
let amountEl = document.getElementById('inputAmount');


submitBtnEl.addEventListener("click", convertvalue);


function convertvalue() {
    let currencyInput = currenciesInputEl.value;
    let currencyOutput = currenciesOutputEl.value;
    let startingAmount = amountEl.value;
    
    if (currencyInput === "CAD") {
    // staring currency : CAD
        if (currencyOutput === "CAD") {
            resultEl.innerHTML = startingAmount + " CAD";
        } else if (currencyOutput === "USD") {
            // CAD to USD
            // 1 CAD = 0.77 USD
            resultEl.innerHTML = (startingAmount * 0.77).toFixed(2) + " USD";
        } else if (currencyOutput === "EUR") {
            // CAD TO EUR
            // 1 CAD = 0.73 EURO
            resultEl.innerHTML = (startingAmount * 0.73).toFixed(2) + " euros";
        } else if (currencyOutput === "JPY") {
            // CAD TO JPY
            // 1 CAD = 100.51 yen
            resultEl.innerHTML = (startingAmount * 100.51).toFixed(2) + " yen";
        } else if (currencyOutput === "GBP") {
            // CAD TO GBP
            // 1 CAD = 0.62 Pound sterling
            resultEl.innerHTML = (startingAmount * 0.62).toFixed(2) + " GBP";
        }
    
    } else if (currencyInput === "USD") {
        // starting currency : USD
        if (currencyOutput === "CAD") {
            // USD to CAD
            // 1 USD = 1.30 CAD
            resultEl.innerHTML = (startingAmount * 1.30).toFixed(2) + " CAD";
        } else if (currencyOutput === "USD") {
            resultEl.innerHTML = startingAmount + " USD";
        } else if (currencyOutput === "EUR") {
            // USD TO EUR
            // 1 USD = 0.95 EURO
            resultEl.innerHTML = (startingAmount * 0.95).toFixed(2) + " euros";
        } else if (currencyOutput === "JPY") {
            // USD TO JPY
            // 1 USD = 130.19 yen
            resultEl.innerHTML = (startingAmount * 130.19).toFixed(2) + " yen";
        } else if (currencyOutput === "GBP") {
            // USD TO GBP
            // 1 USD = 0.81 Pound sterling
            resultEl.innerHTML = (startingAmount * 0.81).toFixed(2) + " GBP";
        }
    } else if (currencyInput === "EUR") {
        // starting currency : Euro
        if (currencyOutput === "CAD") {
            // EUR to CAD
            // 1 EUR = 1.37 CAD
            resultEl.innerHTML = (startingAmount * 1.37).toFixed(2) + " CAD";
        } else if (currencyOutput === "USD") {
            // EUR TO USD
            // 1 EUR = 1.06 USD
            resultEl.innerHTML = (startingAmount * 1.06).toFixed(2) + " USD";
        } else if (currencyOutput === "EUR") {
            resultEl.innerHTML = startingAmount + " euros";
        } else if (currencyOutput === "JPY") {
            // EUR TO JPY
            // 1 EUR = 137.77 yen
            resultEl.innerHTML = (startingAmount * 137.77).toFixed(2) + " yen";
        } else if (currencyOutput === "GBP") {
            // EUR TO GBP
            // 1 EUR = 0.86 Pound sterling
            resultEl.innerHTML = (startingAmount * 0.86).toFixed(2) + " GBP";
        }
    } else if (currencyInput === "JPY") {
        // starting currency : Japanese yen
        if (currencyOutput === "CAD") {
            // JPY to CAD
            // 1 JPY = 0.0100 CAD
            resultEl.innerHTML = (startingAmount * 0.01).toFixed(2) + " CAD";
        } else if (currencyOutput === "USD") {
            // JPY TO USD
            // 1 JPY = 0.0077 USD
            resultEl.innerHTML = (startingAmount * 0.0077).toFixed(2) + " USD";
        } else if (currencyOutput === "EUR") {
            // JPY TO EUR
            // 1 JPY = 0.0073 euros
            resultEl.innerHTML = (startingAmount * 0.0073).toFixed(2) + " euros";
        } else if (currencyOutput === "JPY") {
            resultEl.innerHTML = startingAmount + " yen";
        } else if (currencyOutput === "GBP") {
            // JPY TO GBP
            // 1 JPY = 0.0062 Pound sterling
            resultEl.innerHTML = (startingAmount * 0.0062).toFixed(2) + " GBP";
        }
    } else if (currencyInput === "GBP") {
        // starting currency : Pound sterling / GBP
        if (currencyOutput === "CAD") {
            // GBP to CAD
            // 1 GBP = 1.60 CAD
            resultEl.innerHTML = (startingAmount * 1.60).toFixed(2) + " CAD";
        } else if (currencyOutput === "USD") {
            // GBP TO USD
            // 1 GBP = 1.24 USD
            resultEl.innerHTML = (startingAmount * 1.24).toFixed(2) + " USD";
        } else if (currencyOutput === "EUR") {
            // GBP TO EUR
            // 1 GBP = 1.17 euros
            resultEl.innerHTML = (startingAmount * 1.17).toFixed(2) + " euros";
        } else if (currencyOutput === "JPY") {
            // GBP TO JPY
            // 1 GBP = 160.93 yen
            resultEl.innerHTML = (startingAmount * 160.93).toFixed(2) + " yen";
        } else if (currencyOutput === "GBP") {
            resultEl.innerHTML = startingAmount + " GBP";
        }
    }
}
