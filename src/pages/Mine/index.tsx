import React from 'react';
import './index.less'

export interface Props {
    name: string;
}

class Wechat extends React.Component<Props, object>{
    add = () =>{
    }
    render() {
        return (
            <div className="mine">
               Mine
            </div>
          );
    }
}

export default Wechat;
