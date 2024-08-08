// services/weather.js
export const fetchWeatherData = async (city) => {
  const apiKey = 'b82962611de711e6474e611cab5da778';
  const response = await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?city=北京&key=${apiKey}&extensions=all`);
  const data = await response.json();
  if (data.status !== "1") throw new Error(data.message);
  return data;
};

export const fetchWeatherDataNow = async (city) => {
  const apiKey = 'b82962611de711e6474e611cab5da778';
  const response = await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?city=北京&key=${apiKey}&extensions=base`);
  const data = await response.json();
  if (data.status !== "1") throw new Error(data.message);
  return data;
};