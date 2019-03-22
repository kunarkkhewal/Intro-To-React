import React, {Component} from 'react';
import Aside from './Aside';

class Main extends Component{
    render(){
        return(
            <main>
                Main
                <button onClick={this.props.increase}>Click me to Increse</button>
                <Aside />
                {/* <Button /> */}
            </main>
        )
    }
}

export default Main