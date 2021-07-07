import './header.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

	const [home, setHome] = useState(true)

    return (
			<div className='header'>
				<section className='navbar'>
					<a href='/'>
						<h1> In Your City</h1>
						<h3> the latest cultural events near you</h3>
					</a>
					<section className='buttons'>
						<Link to='/'>
							<button className='home'>Home</button>
						</Link>
						<Link to='/manage'>
							<button className='share'>Share Your Event</button>
						</Link>
					</section>
				</section>
			</div>
		);
};

export default Header;