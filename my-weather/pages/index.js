import { Inter } from "next/font/google";
import Search from '@/compoents/Search';
import WeatherCard from '@/compoents/WeatherCard';
import WeatherNow from '@/compoents/WeatherNow';
import React, { useEffect, useState } from "react";
import { fetchWeatherData, fetchWeatherDataNow } from '@/services/weather';
import { Tabs, message, Button, Alert } from 'antd';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [weather1, setweather] = useState({ city: '' })
  const [weather2, setweather2] = useState('')
  const [detail, setDetail] = useState('')
  const [state, setState] = useState(0)
  const [condition, setCondition] = useState(true)
  const [temp, setTemp] = useState(true)
  const { TabPane } = Tabs;
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    fetchWeatherDataNow('江门').then(res => {
      setDetail(JSON.stringify(res))
      setweather(res.lives[0])
    })

    fetchWeatherData('江门').then(res => {
      setweather2(JSON.stringify(res))
    })
    if (!localStorage.getItem('cityArray')) {
      localStorage.setItem('cityArray', [])
    }
  }, [])

  const search = (city) => {
    fetchWeatherDataNow(city).then(res => {
      if (res.lives[0].length == 0) {
        messageApi.open({
          type: 'error',
          content: '没有找到该城市的天气预测',
        });
        return
      } else {
        setState(1)
        setweather(res.lives[0])
        setDetail(JSON.stringify(res))
        fetchWeatherData(city).then(res => {
          setweather2(JSON.stringify(res))
        })
      }
    })
  }

  const tempChange = () => {
    setCondition(!condition)
    setTemp(!temp)
  }

  return (
    <main
      class="flex items-center justify-center h-screen"
    >
      {contextHolder}
      <div class="flex mx-auto w-3/5  bg-white rounded-lg" style={{ height: 590 }}>
        <div class='flex  w-1/5 flex-col justify-around'>
          <Search onSearch={search} />
          <div class='w-4/5 mx-auto text-center '>
            <img class='mx-auto' src='/cloud.jpg'></img>
            {temp ? <div class='text-2xl'>{weather1.temperature}℃</div> : <div class='text-2xl'>{Math.floor((weather1.temperature)*1.8+32)}℉</div>}
            <div class='mt-2'>{weather1.reporttime}</div>
          </div>
          <div class='w-4/5 mx-auto border-t-2 border-t-neutral-300 mb-10'>
            <div class='flex text-justify mt-5'><img src="/cloud2.png" class='w-6 h-6  mr-2'></img>天气-{weather1.weather}</div>
            <div class='flex text-justify  mt-5'><img src="/rain.png" class='w-5 h-5 mr-2'></img>湿度-{weather1.humidity}%</div>
            <div class='mt-10 text-center rounded-lg text-white font-black text-3xl' style={{
              height: '100px', // 设置盒子的高度  
              backgroundImage: 'url(/beijing.jpg)', // 设置背景图  
              backgroundSize: 'cover', // 设置背景图覆盖整个盒子，根据需要调整  
              backgroundPosition: 'center', // 设置背景图居中显示  
              alignContent: 'center'
            }}>{weather1.city}</div>
          </div>
        </div>
        <div class='w-4/5 bg-slate-50 rounded-lg'>
          <div className="pl-2">
            <div class='float-right relative right-12 top-2 '>
              {condition ? <Button type="primary z-10" shape="circle" onClick={tempChange}>
                ℃
              </Button> : <Button type="primary z-10" shape="circle" onClick={tempChange}>
                ℉
              </Button>}
            </div>
            <Tabs defaultActiveKey="2" >
              <TabPane tab="当天" key="1">
                <WeatherNow weather1={detail} weather2={weather2} />
              </TabPane>
              <TabPane tab="预报" key="2" >
                <WeatherCard weather1={detail} weather2={weather2} state={temp}/>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
