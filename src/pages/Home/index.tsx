import React from 'react';

export interface Props {
    name: string;
}

class Home extends React.Component<Props, object>{
    render() {
        return (
            <div className="hello">
                home
            </div>
          );
    }
}

export default Home;
