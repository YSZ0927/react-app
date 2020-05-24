import React, { PropsWithChildren, useEffect } from 'react'
import { WingBlank } from 'antd-mobile';
import './index.less'
import { TypeSession } from '@/typings'

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
                <img src="https://image.sudian178.com/sd/index/theme/24340676533934521.gif" alt=""/>
                <img src="https://image.sudian178.com/sd/index/theme/24514010448859166.jpg" alt=""/>
                <img src="https://image.sudian178.com/sd/index/theme/24514572631572822.jpg" alt=""/>
            </div>
            <div>
                <img src="https://image.sudian178.com/sd/index/theme/24506604039859325.png" alt=""/>
            </div>
        </WingBlank>
    )
}