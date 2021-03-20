import clear from './assets/clear.jpg';
import rain from './assets/rain.jpg';
import cloudy from './assets/cloudy.jpg';
import snow from './assets/snow.jpg';
import storm from './assets/storm.jpg';

const populateWeather = (results) => {
  const deg = document.querySelector('.degree');
  const desc = document.querySelector('.description');
  const city = document.querySelector('.location-name');
  const img = document.querySelector('#icon-img');
  city.innerHTML = results.name;
  deg.innerHTML = results.main.temp;
  desc.innerHTML = results.weather[0].description;
  img.src = `http://openweathermap.org/img/w/${results.weather[0].icon}.png`;
};

const backgroundChanger = (results) => {
  switch (results.weather[0].main) {
    case 'Clear':
      document.body.style.backgroundImage = `url(${clear})`;
      break;
    case 'Clouds':
      document.body.style.backgroundImage = `url(${cloudy})`;
      break;
    case 'Rain':
      document.body.style.backgroundImage = `url(${rain})`;
      break;
    case 'Drizzle':
      document.body.style.backgroundImage = `url(${rain})`;
      break;
    case 'Mist':
      document.body.style.backgroundImage = `url(${rain})`;
      break;
    case 'Thunderstorm':
      document.body.style.backgroundImage = `url(${storm})`;
      break;
    case 'Snow':
      document.body.style.backgroundImage = `url(${snow})`;
      break;
    default:
      break;
  }
};
const weatherFetcher = () => {
  const inputBox = document.querySelector('.search-input');
  const butn = document.querySelector('.btn');

  butn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=metric&appid=a8d39b545ee760a37a11bbc7a1698ad6`,
    )
      .then((response) => response.json())
      .then((data) => {
        populateWeather(data);
        backgroundChanger(data);
      })
      .catch(() => alert('City does not exist!'));
  });
};

export default weatherFetcher;
