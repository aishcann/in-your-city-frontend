import './createevents.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import eventData from '../../data.json';

const CreateEvents = () => {

	const [newEvent, setNewEvent] = useState(true)

	const handleClick = () => {
		setNewEvent(!newEvent);
	};

    return (
			<div className='createEvents'>
				<section className='header'>
					<a href='/'>
						<h1>In Your City</h1>
					</a>
				</section>
				{newEvent ? (
					<form className='createEvent'>
						<h3>Create Your Event</h3>
						<p>Event Name</p>
						<input type='text' className='text' id='name' />
						<p>Date</p>
						<input type='date' className='date' />
						<p>Time</p>
						<input type='time' className='time' />
						<p>Location</p>
						<input type='text' className='text' id='location' />
						<p>Link</p>
						<input type='url' className='text' id='link' />
						<p>Description</p>
						<input type='text' className='text' id='description' />
						<button type='submit' onClick={handleClick}>
							Create Event
						</button>
					</form>
				) : null}
				{!newEvent ? (
					<section className='eventCreated'>
						<h3>
							Congrats! You created your event! <br /> Here are your details:
						</h3>
						<p>Name:</p>
						<p>Date:</p>
						<p>Time: </p>
						<p>Location: </p>
						<p>Link: </p>
						<p>Description: </p>
						<Link to= '/manage'>
							<button>I want to edit my event</button>
						</Link>
						<button>I want to delete my event</button>
					</section>
				) : null}
			</div>
		);
};

export default CreateEvents;