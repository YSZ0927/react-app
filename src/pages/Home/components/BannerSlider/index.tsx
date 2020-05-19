import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Carousel } from 'antd-mobile';
import SearchInput from '@/components/SearchInput'
import './index.less'

type Props = PropsWithChildren<{
    bannerList: string[]
    getBanner: () => void
}>
export default function (props: Props) {
    const colorArr = [
        'rgb(255, 173, 0)',
        'rgb(193, 183, 160)',
        'rgb(255, 80, 108)',
        'rgb(255, 172, 77)'
    ]
    useEffect(() => {
        if (props.bannerList.length === 0) {
            props.getBanner()
        }
    })
    let [bannerColor, setBannerColor] = useState(colorArr[0])
    const changeBanner = (val) => {
        setBannerColor(colorArr[val])
    }
    return (
        <div className="home-banner" style={{background: bannerColor}}>
            <SearchInput></SearchInput>
            <Carousel
                autoplay={true}
                afterChange={changeBanner}
                infinite>
                {props.bannerList.map(val => (
                    <img src={val}
                        key={val}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top', borderRadius: '6px' }}/>
                ))}
            </Carousel>
        </div>
        
    )
}