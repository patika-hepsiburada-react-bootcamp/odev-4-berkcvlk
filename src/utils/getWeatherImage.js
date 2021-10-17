const weathers = ["clear", "clouds", "thunder", "rain", "snow"];

export const getWeatherImage = (description) => {
  return weathers.filter((weather) => description.includes(weather))[0];
};
