import React, { PropsWithChildren, useEffect } from 'react'
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
    
    // this.$refs.typeSession

    // const listenScroll = () => {

    // }ref="typeSession"
    return (
        <div className="type-session" >
            {
                props.sessionList.map(val => (
                    <dl key={val.title}>
                        <dt><img src={val.url}  alt=""/></dt>
                        <dd>{val.title}</dd>
                    </dl>
                ))
            }
        </div>
    )
}