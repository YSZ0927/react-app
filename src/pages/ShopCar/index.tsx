import React from 'react';
import './index.less'

export interface Props {
    name: string;
}

class ShopCar extends React.Component<Props, object>{
    add = () =>{
    }
    render() {
        return (
            <div className="hello">
                Car
            </div>
          );
    }
}

export default ShopCar;
