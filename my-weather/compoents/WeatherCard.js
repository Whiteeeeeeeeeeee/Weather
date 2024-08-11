// components/WeatherCard.js
import style from '@/styles/WeatherCard.module.css'
import React, { useEffect, useState } from 'react';
import { Flex, Progress, Tooltip } from 'antd';

const WeatherCard = ({ weather1, weather2, state }) => {
    if (!weather2 || !weather1) return null;
    let detail2 = JSON.parse(weather1).lives[0]
    let detail = JSON.parse(weather2).forecasts[0].casts

    const changStr = (num) => {
        if (num == '1') {
            return '一'
        } else if (num == '2') {
            return '二'
        }
        else if (num == '3') {
            return '三'
        }
        else if (num == '4') {
            return '四'
        }
        else if (num == '5') {
            return '五'
        }
        else if (num == '6') {
            return '六'
        } else {
            return '日'
        }
    }

   
    return (
        <div class=''>
            <div class='flex justify-around w-full mx-auto ' >
                {
                    detail.map((item, index) => (
                        <div class="bg-white w-1/5 h-50 font-black rounded-lg" key={index}>
                            <div class='text-center'>星期{changStr(item.week)}</div>
                            {item.dayweather.indexOf('雨')>=0 ? <img class='mx-auto' src={`/雨.jpg`} style={{ width: 80, height: 80 }}></img>:item.dayweather.indexOf('云')>=0 || item.dayweather.indexOf('阴')>=0? <img class='mx-auto' src={`/阴.jpg`} style={{ width: 80, height: 80 }}></img>:<img class='mx-auto' src={`/晴.jpg`} style={{ width: 80, height: 80 }}></img>}
                            <div class='text-center'>{item.dayweather}</div>
                            {state ? <h2 className="text-xl font-bold text-center">{item.nighttemp}~{item.daytemp}℃</h2> : <h2 className="text-xl font-bold text-center">{Math.floor((item.nighttemp) * 1.8 + 32)}~{Math.floor((item.daytemp) * 1.8 + 32)}℉</h2>}
                        </div>
                    ))
                }
            </div>
            <h1 class='font-bold text-2xl' style={{ marginLeft: 10, marginTop: 5, marginBottom: 10 }}>今日状况</h1>
            <div class='flex  w-full  h-3/5 justify-around' style={{ flexWrap: 'wrap' }}>
                <div class={style.box}>
                    紫外线
                    <Flex class='text-center' gap="small" wrap>
                        <Tooltip>
                            <Progress type="dashboard" percent={50} format={(percent) => `${percent / 10}`} />
                        </Tooltip>
                    </Flex>
                </div>
                <div class={style.boxMargin}>
                    风力等级
                    <div class=' font-bold' style={{ color: 'black', fontSize: 50 }}>{detail2.windpower}</div>
                    <div>风向：{detail2.winddirection}
                    </div>
                </div>
                <div class={style.boxMargin}>
                    日出/日落
                    <div class='flex items-center mt-5' style={{ color: 'black', fontSize: 20 }}>
                        <img class='w-6 h-6  mr-2' src="/日出.png" ></img>6:35AM
                    </div>
                    <div class='flex items-center' style={{ color: 'black', fontSize: 20 }}>
                        <img class='w-6 h-6  mr-2' src="/日落.png" ></img> 5:42PM
                    </div>
                </div>
                <div class={style.boxMargin2}>
                    湿度
                    <div style={{ color: 'black', fontSize: 30 }}>
                        {detail2.humidity}%
                    </div>
                    <Progress percent={detail2.humidity} size={{ width: 150 }} showInfo={false} />
                </div>
                <div class={style.boxMargin3}>
                    能见度
                    <div style={{ color: 'black', fontSize: 30 }}>
                        5.2KM
                    </div>
                </div>
                <div class={style.boxMargin3}>
                    空气质量
                    <div style={{ color: 'black', fontSize: 30 }}>
                        105
                    </div>
                    <Progress percent={105 / 2} size={{ width: 150 }} showInfo={false} />
                </div>
            </div>
        </div >
    );
};

export default WeatherCard; 