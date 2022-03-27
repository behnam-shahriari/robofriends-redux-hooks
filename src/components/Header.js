import React, { Component } from 'react';
import CounterButton from '../components/CounterButton';

class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		return(
			<div>
				<h1 className='f1'>RoboFriends | B_SH</h1>
				<CounterButton color={'red'} />
			</div>
			)
	}
}

export default Header;