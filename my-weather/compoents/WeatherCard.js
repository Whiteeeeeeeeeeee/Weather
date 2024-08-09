// components/WeatherCard.js
const WeatherCard = ({ weather }) => {
    if (!weather) return null;
    let detail = JSON.parse(weather).forecasts[0].casts
    return (
        <div class='flex justify-around w-4/5 mx-auto h-60' >
        {
            detail.map((item, index) => (
                <div class="bg-white w-1/5 h-60">
                    <div>123123</div>
                    <img src="/cloud.jpg"></img>
                    <h2 className="text-xl font-bold">{item.nighttemp}~{item.daytemp}℃</h2>
                </div>
            ))
        }
        </div>
    );
};

export default WeatherCard; 