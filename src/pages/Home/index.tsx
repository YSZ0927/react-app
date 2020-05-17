import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import SearchInput from '@/components/SearchInput'

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
    return (
        <div className="home">
            <SearchInput></SearchInput>
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite>
                    {imgArr.map(val => (
                        <img src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}/>
                    ))}
                </Carousel>
            </WingBlank>
        </div>
    );
}

export default Home;
