import React, { Component } from 'react';
import Header from '../src/component/Header';
import Main from '../src/component/Main';
import Footer from '../src/component/Footer';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state={
			counter : 0
		}
	}
	increseCounter = ()=>{
		this.setState({
			counter : ++this.state.counter
		})
	}
	
	render() {
		let {counter} = this.state;
		return (
			<div className="App">
				<Header counter = {counter}/>
				<Main increase = {this.increseCounter} />
				<Footer />
			</div>
		);
	}
}

export default App;
