import './homepage.scss'
import eventData from '../../data.json'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 

const HomePage = ({data}) => {

	const [logout, setLogout] = useState(false)

	// const [events, setEvents] = useState([])

	// useEffect(() => {
	// 	fetch('http://localhost:8000/events/?format=api')
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			setEvents(json);
	// 			console.log(json);
	// 		})
	// 		.catch(console.error);
	// }, [])

    return (
			<div className='homePage'>
				<section className='navbar'>
					<Link to='/manage' >
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
								<img src={event.image} alt={event.name} />
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