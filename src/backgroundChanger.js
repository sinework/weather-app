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
  export default backgroundChanger;