import backgroundChanger from './backgroundChanger';
import toggleTempUnit from './toggleTempUnit';

const populateWeather = (results) => {
  const deg = document.querySelector('.degree');

  const desc = document.querySelector('.description');
  const city = document.querySelector('.location-name');
  const img = document.querySelector('#icon-img');
  const tempSymbol = document.querySelector('.degree-symbol');
  city.innerHTML = results.name;
  deg.innerHTML = results.main.temp;
  desc.innerHTML = results.weather[0].description;
  tempSymbol.textContent = 'F';
  img.src = `http://openweathermap.org/img/w/${results.weather[0].icon}.png`;
};

const weatherFetcher = () => {
  const inputBox = document.querySelector('.search-input');
  const butn = document.querySelector('.btn');
  const city = document.querySelector('.location-name');
  let tempData;

  butn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=imperial&appid=a8d39b545ee760a37a11bbc7a1698ad6`,
    )
      .then((response) => response.json())
      .then((data) => {
        tempData = data;
        populateWeather(tempData);
        backgroundChanger(tempData);
      })
      .catch(() => { city.textContent = 'City does not exist!'; });
  });

  const tglBtn = document.querySelector('.tglBtn');
  tglBtn.addEventListener('click', toggleTempUnit, false);
};

export default weatherFetcher;
