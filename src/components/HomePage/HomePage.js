import './homepage.scss'
import eventData from '../../data.json'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 

const HomePage = ({data}) => {
    return (
			<div className='homePage'>
				<section className='navbar'>
					<Link to='/create' >
                        <button>Share Your Event</button>
                    </Link>
				</section>
				<section className='header'>
					<h1>In Your City</h1>
					<h3>the latest cultural events near you</h3>
				</section>
				<section className='eventList'>
					{eventData.map((event) => {
						return (
							<div className='eventInfo'>
								<h3>{event.name}</h3>
								<h4>{event.date}</h4>
								<h4>{event.time}</h4>
								<h4>{event.location}</h4>
								<a href={event.link}>{event.link}</a>
								<p>{event.description}</p>
							</div>
						);
					})}
				</section>
			</div>
		);
};

export default HomePage;