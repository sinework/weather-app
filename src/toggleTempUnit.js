const toggleTempUnit = () => {
  const deg = document.querySelector('.degree');
  const tempSymbol = document.querySelector('.degree-symbol');
  const tglBtn = document.querySelector('.tglBtn');
  const city = document.querySelector('.location-name');

  if (tempSymbol.textContent === 'F') {
    tempSymbol.textContent = 'C';
    tglBtn.textContent = 'View in Fahrenheit';

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&units=metric&appid=a8d39b545ee760a37a11bbc7a1698ad6`,
    )
      .then((response) => response.json())
      .then((data) => {
        deg.textContent = data.main.temp;
      });
  } else {
    tempSymbol.textContent = 'F';
    tglBtn.textContent = 'View in Celcius';
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&units=imperial&appid=a8d39b545ee760a37a11bbc7a1698ad6`,
    )
      .then((response) => response.json())
      .then((data) => {
        deg.textContent = data.main.temp;
      });
  }
};

export default toggleTempUnit;