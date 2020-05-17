import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import SearchInput from '@/components/SearchInput'
import './index.less'

export interface Props {
    name: string;
}

const Home = function () {
    const imgArr = [
        'https://image.sudian178.com/sd/themeImg/23563959242835813.jpg',
        'https://image.sudian178.com/sd/themeImg/23272799654634282.jpg',
        'https://image.sudian178.com/sd/themeImg/23216808188207786.jpg',
        'https://image.sudian178.com/sd/themeImg/23561250090602203.jpg'
    ]
    const colorArr = [
        'rgb(255, 173, 0)',
        'rgb(193, 183, 160)',
        'rgb(255, 80, 108)',
        'rgb(255, 172, 77)'
    ]
    let color = colorArr[0]
    const changeBanner = (val) => {
        color = colorArr[val]
    }
    return (
        <div className="home">
            <div className="home-banner" style={{background: color}}>
                <SearchInput></SearchInput>
                <Carousel
                    autoplay={true}
                    afterChange={changeBanner}
                    infinite>
                    {imgArr.map(val => (
                        <img src={val}
                            key={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top', borderRadius: '6px' }}/>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Home;
