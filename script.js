const convertBottun = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")      //valor a ser convertido real
    const currencyValueConverted = document.querySelector(".currency-value")  // outras moedas 

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const pesoToday = 0.14
     
    
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)


    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ed-DE", {

            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)

    }

    if(currencySelect.value == "peso"){

        currencyValueConverted.innerHTML = new Intl.NumberFormat("ar-ISO",{
            style:"currency",
            currency:"ARS"

     }).format( inputCurrencyValue / pesoToday)

    }
  

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        corrency: "BRL"

    }).format(inputCurrencyValue.value)


}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImag = document.querySelector(".currency-img")
    

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        

    }
   
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"

    }

    if (currencySelect.value == "peso"){
        currencyName.innerHTML = "Peso argentino"

    }

    convertValues()

}

  

currencySelect.addEventListener("change",changeCurrency)
convertBottun.addEventListener("click", convertValues)
