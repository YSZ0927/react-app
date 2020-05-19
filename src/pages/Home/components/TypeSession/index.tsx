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
        <WingBlank className="type-session">
            {
                props.sessionList.map(val => (
                    <dl key={val.url}>
                        <dt><img src={val.url}  alt=""/></dt>
                        <dd>{val.title}</dd>
                    </dl>
                ))
            }
        </WingBlank>
    )
}