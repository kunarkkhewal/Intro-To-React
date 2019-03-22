import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header>
                Header: <br/>
                {this.props.counter}
            </header>
        )
    }
}

export default Header;