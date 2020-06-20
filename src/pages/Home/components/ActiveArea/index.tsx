import React, { PropsWithChildren, useEffect } from 'react'
import { WingBlank } from 'antd-mobile';
import './index.less'
import { TypeSession } from '@/typings'
import active1 from '@/assets/images/active1.jpg'
import active2 from '@/assets/images/active2.gif'
import active3 from '@/assets/images/active3.jpg'

type Props = PropsWithChildren<{
    sessionList: TypeSession[]
    getTypeSessions: () => void
}>
export default function (props: Props) {
    useEffect(() => {
        if (props.sessionList.length === 0) {
            props.getTypeSessions()
        }
    })
    return (
        <WingBlank className="active-box">
            <div>
                <img src={active2} alt=""/>
                <img src={active1} alt=""/>
                <img src={active3} alt=""/>
            </div>
            <div>
                <img src="https://image.sudian178.com/sd/index/theme/24506604039859325.png" alt=""/>
            </div>
        </WingBlank>
    )
}