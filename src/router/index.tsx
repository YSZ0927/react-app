import React from 'react'
import {Route} from "react-router-dom";
import FindCircle from '@/pages/FindCircle'
import Home from '@/pages/Home'
import ShopCar from '@/pages/ShopCar'
import Mine from '@/pages/Mine'
import Tabs from '@/components/Tabs'
import './index.less'

const BasicRouter = () => (
    <>
        <main>
            <Route path="/" exact component={Home}/>
            <Route path="/find-circle" exact component={FindCircle}/>
            <Route path="/shop-car" exact component={ShopCar}/>
            <Route path="/mine" exact component={Mine}/>
        </main>
        <Tabs></Tabs>
    </>
);


export default BasicRouter;