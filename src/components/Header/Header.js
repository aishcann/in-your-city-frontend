import './header.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

	const [home, setHome] = useState(true)

    return (
			<div className='header'>
				<a href='/'>
					<h1> In Your City</h1>
					<h3> the latest cultural events near you</h3>
				</a>
			</div>
		);
};

export default Header;