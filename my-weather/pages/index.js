import { Inter } from "next/font/google";
import Search from '@/compoents/Search';
import WeatherCard from '@/compoents/WeatherCard';
import WeatherNow from '@/compoents/WeatherNow';
import React, { useEffect, useState } from "react";
import { fetchWeatherData, fetchWeatherDataNow } from '@/services/weather';
import { Tabs, Layout, Select } from 'antd';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [weather1, setweather] = useState({ city: '' })
  const [weather2, setweather2] = useState()
  const [detail, setDetail] = useState()
  const { TabPane } = Tabs;

  useEffect(() => {
    fetchWeatherDataNow('jiangmen').then(res => {
      setweather(res.lives[0])
    })

    fetchWeatherData('jiangmen').then(res => {
      setweather2(JSON.stringify(res))
    })
  }, [])

  const search = (city) => {
    fetchWeatherDataNow(city).then(res => {
      setweather(res.lives[0])
    })
    fetchWeatherData(city).then(res => {
      setweather2(JSON.stringify(res))
    })
  }
  return (
    <main
      class="flex h-lvh items-center justify-center h-screen"
    >
      <div class="flex mx-auto w-3/5 h-3/5 bg-white rounded-lg" >
        <div class='flex  w-1/5 flex-col justify-around'>
          <Search onSearch={search} />
          <div class='w-4/5 mx-auto '>
            <img src='/cloud.jpg'></img>
            <div class='text-2xl'>{weather1.temperature}℃</div>
            <div class='mt-2'>{weather1.reporttime}</div>
          </div>
          <div class='w-4/5 mx-auto border-t-2 border-t-neutral-300'>
            <div class='flex text-justify '><img src="/cloud2.png" class='w-6 h-6'></img>{weather1.weather}</div>
            <div class='flex text-justify  mt-5'><img src="/rain.png" class='w-5 h-5'></img>Rain-{weather1.humidity}%</div>
            <div class='mt-10 text-center rounded-lg text-white' style={{
              height: '100px', // 设置盒子的高度  
              backgroundImage: 'url(/beijing.jpg)', // 设置背景图  
              backgroundSize: 'cover', // 设置背景图覆盖整个盒子，根据需要调整  
              backgroundPosition: 'center', // 设置背景图居中显示  
              alignContent:'center'
            }}>beijing</div>
          </div>
        </div>
        <div class='w-4/5 bg-slate-50'>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="当天" key="1">
              {/* <WeatherNow weather={weather1} /> */}
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="预报" key="2" >
              <WeatherCard weather={weather2} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
