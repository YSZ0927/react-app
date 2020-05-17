import React from 'react';
import { Button } from 'antd-mobile';

export interface Props {
    name: string;
}

class Wechat extends React.Component<Props, object>{
    add = () =>{
    }
    render() {
        return (
            <div className="hello">
                <Button type="primary">sdfasd</Button>
            </div>
          );
    }
}

export default Wechat;
