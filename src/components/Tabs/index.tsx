import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './index.less'

interface Props {}
export default function(props: Props) {
    return (
        <footer>
            <NavLink exact to="/">首页</NavLink>
            <NavLink exact to="/">发现</NavLink>
            <NavLink exact to="/">购物车</NavLink>
            <NavLink exact to="/">我的</NavLink>
        </footer>
    )
}