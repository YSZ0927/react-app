import React from 'react'
import {Route} from "react-router-dom";
import FindCircle from '@/pages/FindCircle'
import Home from '@/pages/Home'
import ShopCar from '@/pages/ShopCar'
import Mine from '@/pages/Mine'
import Tabs from '@/components/Tabs'


const BasicRouter = () => (
    <>
        <main>
            <Route path="/" component={Home}/>
            <Route path="/find-circle" component={FindCircle}/>
            <Route path="/shop-car" component={ShopCar}/>
            <Route path="/mine" component={Mine}/>
        </main>
        <Tabs></Tabs>
    </>
);


export default BasicRouter;