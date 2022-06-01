


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

    createEl.innerHTML = `
    <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Custom jumbotron</h1>
      <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
      <button class="btn btn-primary btn-lg" type="button">Example button</button>
    </div>
  </div>
    `

    
}

getCountryInformation("india");