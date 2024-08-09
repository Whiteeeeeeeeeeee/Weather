// components/WeatherCard.js
const WeatherNow = ({ weather }) => {
    if (!weather) return null;
  
    console.log(JSON.parse(weather), '213');
    const detailInformation = JSON.parse(weather).forecasts[0];
    return (
      detailInformation.casts.map((item, index) => (
        <div className="flex max-w-sm p-4 mx-auto mt-4 bg-white rounded-md shadow-md" key={index}>
          <h2 className="text-xl font-bold" >{detailInformation.city}</h2>
          <p className="text-lg">{item.dayweather}</p>
          <p className="text-lg">{item.dayweather}°C</p>
          <p>Wind Speed: {item.dayweather} m/s</p>
          <p>Humidity: {item.dayweather}%</p>
        </div>
      ))
    );
  };
  
  export default WeatherNow;