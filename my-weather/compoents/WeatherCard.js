// components/WeatherCard.js
const WeatherCard = ({ weather }) => {
    if (!weather) return null;
    let detail = JSON.parse(weather).forecasts[0].casts
    return (
        <div>
        {
            detail.map((item, index) => (
                <div className="max-w-sm p-4 mx-auto mt-4 bg-white rounded-md shadow-md">
                    <h2 className="text-xl font-bold">{item.date}</h2>
                    {/* <p className="text-lg">{weatherDetails[0].description}</p>
                    <p className="text-lg">{main.temp}°C</p>
                    <p>Wind Speed: {wind.speed} m/s</p>
                    <p>Humidity: {main.humidity}%</p> */}
                </div>
            ))
        }
        </div>
    );
};

export default WeatherCard;