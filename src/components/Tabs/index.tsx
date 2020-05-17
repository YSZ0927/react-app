import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'

interface Props {}
export default function(props: Props) {
    return (
        <footer>
            <NavLink exact to="/" className="tab-items">
                <i className="iconfont icon-shouye"></i>
                <span>首页</span>
            </NavLink>
            <NavLink exact to="/find-circle" className="tab-items">
                <i className="iconfont icon-faxian"></i>
                <span>发现</span>
            </NavLink>
            <NavLink exact to="/shop-car" className="tab-items">
                <i className="iconfont icon-gouwuche"></i>
                <span>购物车</span>
            </NavLink>
            <NavLink exact to="/mine" className="tab-items">
                <i className="iconfont icon-wode"></i>
                <span>我的</span>
            </NavLink>
        </footer>
    )
}