import React, { PropsWithChildren, useEffect, useState } from 'react'
import { WingBlank } from 'antd-mobile';
import './index.less'
import { GoodsList, Goods } from '@/typings'

type Props = PropsWithChildren<{
    goodsList: GoodsList
    getGoodsList: () => void
}>
export default function (props: Props) {
    const [proListleft, getLeftList] = useState<Goods[]>([])
    const [proListRight, getRightList] = useState<Goods[]>([])

    let listArr:Array<Goods> = []
    useEffect(() => {
        listArr = props.goodsList.list
        if (listArr.length === 0) {
            props.getGoodsList()
        }
        // getRightList(proListRight.concat(listArr.slice(Math.ceil(listArr.length / 2), listArr.length)))
    })
    // getLeftList(proListleft.concat(listArr.slice(0, Math.floor(listArr.length / 2)))
    return (
        <WingBlank className="goods-list-two">
            <div>
                {
                    proListleft.map(el => (
                        <img src={el.imgUrl} key={el.goodsId}  alt=""/>
                    ))
                }
            </div>
            <div>
                {
                    proListRight.map(el => (
                        <img src={el.imgUrl} key={el.goodsId}  alt=""/>
                    ))
                }
            </div>
        </WingBlank>
    )
}