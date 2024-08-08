
import { Inter } from "next/font/google";
import Search from '@/compoents/Search';
import WeatherCard from '@/compoents/WeatherCard';
import WeatherNow from '@/compoents/WeatherNow';
import React, { useEffect, useState } from "react";
import { fetchWeatherData, fetchWeatherDataNow } from '@/services/weather';
import { Tabs, Layout, Select } from 'antd';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [weather1, setweather] = useState()
  const [weather2, setweather2] = useState()
  const { TabPane } = Tabs;
  fetchWeatherDataNow().then(res => {
    console.log(res, '2232');

  })
  fetchWeatherData('jiangmen').then(res => {
    setweather2(JSON.stringify(res))
  })

  const hanshu = () => {
    console.log('dayinchulai');

  }
  return (
    <main
      class="flex h-lvh items-center justify-center h-screen"
    >
      <div class="flex mx-auto w-3/5 h-3/5 bg-white rounded-lg">
        <div class='w-2/5'>
          <Search onSearch={hanshu} />
        </div>
        <div class='w-3/5 bg-slate-50'>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="当天" key="1">
              <WeatherNow weather={weather1} />
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
