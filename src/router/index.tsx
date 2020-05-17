import React from 'react'
import {Route} from "react-router-dom";
import Wechat from '../pages/Wechat'
import Home from '../pages/Home'


const BasicRouter = () => (
    <>
        <Route path="/home" component={Home}/>
        <Route path="/wechat" component={Wechat}/>
    </>
);


export default BasicRouter;