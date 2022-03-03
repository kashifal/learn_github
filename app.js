

function renderCountry(data) {
  document.querySelector('.name h3').innerHTML = `${data.name.common}`;
  document.querySelector('img').src = `${data.flags.png}`;
  document.querySelector('.names h2').innerHTML = `${data.subregion}`;
  document.querySelector('.capital h4').innerHTML = `${data.capital}`;
  console.log(data);
}



const request = function (country) {
  fetch(`https://restcountries.com/v3.1/capital/${country}`).then(function (response) {
    return response.json();
  }).then(function (data) {
    renderCountry(data[0])
  })
}

function inputted() {

  const val = document.querySelector('input').value;

  request(val)
}
