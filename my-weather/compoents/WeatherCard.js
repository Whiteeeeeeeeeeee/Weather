// components/WeatherCard.js

const WeatherCard = ({ weather }) => {
    if (!weather) return null;
    let detail = JSON.parse(weather).forecasts[0].casts
    return (
        <div>
            <div class='flex justify-around w-4/5 mx-auto h-60' >
                {
                    detail.map((item, index) => (
                        <div class="bg-white w-1/5 h-50">
                            <div>{item.date}</div>
                            <img src="/cloud.jpg" style={{width:100,height:100}}></img>
                            <h2 className="text-xl font-bold">{item.nighttemp}~{item.daytemp}℃</h2>
                        </div>
                    ))
                }
            </div>
            <h1 class='w-4/5 mx-auto'>今日状况</h1>
            <div class='flex  w-4/5 mx-auto' style={{ flexWrap: 'wrap' }}>
                <div class="bg-white" style={{ width: 230, height: 150 }}>01</div>
                <div class="bg-white" style={{ width: 230, height: 150, marginLeft: 20 }}>02</div>
                <div class="bg-white" style={{ width: 230, marginLeft: 20 }}>03</div>
                <div class="bg-white" style={{ width: 230, height: 150, marginTop: 20 }}>04</div>
                <div class="bg-white" style={{ width: 230, marginLeft: 20, marginTop: 20 }}>05</div>
                <div class="bg-white" style={{ width: 230, marginLeft: 20, marginTop: 20 }}>06</div>
            </div>
        </div >
    );
};

export default WeatherCard; 