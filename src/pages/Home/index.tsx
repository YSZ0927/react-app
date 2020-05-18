import React, { useState, PropsWithChildren } from 'react';
import { Carousel } from 'antd-mobile';

import { connect } from 'react-redux'
import { RouterComponentProps } from 'react-router-dom'
import SearchInput from '@/components/SearchInput'
import ProductList from '@/components/ProductList'
import TypeSession from './components/TypeSession'
import mapDispatchToProps from '@/store/actions/home'
import './index.less'

type Props = PropsWithChildren<RouterComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>;

function Home (props: Props) {
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
    let [bannerColor, setBannerColor] = useState(colorArr[0])
    const changeBanner = (val) => {
        setBannerColor(colorArr[val])
    }
    return (
        <div className="home">
            <div className="home-banner" style={{background: bannerColor}}>
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
            <TypeSession
                sessionList={props.typrSessionList}
                getTypeSessions={props.getTypeSessions}>
            </TypeSession>
            <ProductList></ProductList>
        </div>
    );
}

const mapStateToProps = (state) => state.home
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
