import React from 'react';
import { Button } from 'antd-mobile';
import './index.less'

export interface Props {
    name: string;
}

class Wechat extends React.Component<Props, object>{
    add = () =>{
    }
    render() {
        return (
            <div className="hello">
                <p>asdfasdf</p>
                <Button type="primary">sdfasasfd</Button>
            </div>
          );
    }
}

export default Wechat;
