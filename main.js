


const createEl = document.createElement('countryWrap')

function getCountryInformation(country){
    //  Country AJAX CAll Variable
    const countryRequest = new XMLHttpRequest();
    countryRequest.open('GET',  `https://restcountries.com/v3.1/name/${country}`);
    //  Send Request to server (It will not get any data unless we use event load on it, because it is processing in background). It's a asynchronus request
    countryRequest.send();
    //  Using Load event to load country information
    countryRequest.addEventListener('load', (e) => {
        console.log(countryRequest.responseText)
    })


    
}

getCountryInformation("india");