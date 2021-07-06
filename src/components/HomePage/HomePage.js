import './homepage.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 

const HomePage = () => {

		const [events, setEvents] = useState([])

			useEffect(() => {
				fetch('http://localhost:8000/events/')
					.then((res) => res.json())
					.then((res) => {
						setEvents(res)
					})
					.catch(console.error)
					;
			});

    return (
			<div className='homePage'>
				<Link to='/manage'>
					<button className='share'>Share Your Event</button>
				</Link>
				<section className='eventList'>
					{events.map((event) => {
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