import './manageevents.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ManageEvents = () => {

	const url = 'http://localhost:8000/events/';

	const [newEvent, setNewEvent] = useState(true)

	const [updateEvent, setUpdateEvent] = useState(false)

	const [deleteEvent, setDeleteEvent] = useState(false)

	const [id, setId] = useState('')

	const initialState = {
		name: '',
		date: '',
		time: '',
		location: '',
		link: '',
		description: '',
	};

	const [formState, setFormState] = useState(initialState)

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.id]: e.target.value });
		console.log(formState);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setNewEvent(!newEvent)
		fetch(`${url}${id}`, {
			method: (updateEvent ? 'PUT' : 'POST'),
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formState),
		})
			.then(res => res.json())
			.then(event => {
				setId(event.id)
				setUpdateEvent(false)
				setNewEvent(false)
				setFormState(event)
			})
	};

	const handleClick = (e) => {
		fetch(url + id, {
			method: 'DELETE'
		})
		.then(console.log('removed'))
		.catch(console.error)
	}



    return (
			<div className='createEvents'>
				<Link to='/'>
					<button className='home'>Home</button>
				</Link>
				{newEvent ? (
					<form className='createEvent'>
						<h3>Create Your Event</h3>
						<p>Event Name</p>
						<input
							type='text'
							className='text'
							id='name'
							onChange={handleChange}
							value={formState.name}
						/>
						<p className='date-time'>
							Date
							<br />
							YYYY-MM-DD Format
						</p>
						<input
							type='text'
							className='date'
							id='date'
							onChange={handleChange}
							value={formState.date}
						/>
						<p className='date-time'>
							Time
							<br />
							24HR 00:00:00 Format
						</p>
						<input
							type='text'
							className='time'
							id='time'
							onChange={handleChange}
							value={formState.time}
						/>
						<p>Location</p>
						<input
							type='text'
							className='text'
							id='location'
							onChange={handleChange}
							value={formState.location}
						/>
						<p>Link</p>
						<input
							type='url'
							className='text'
							id='link'
							onChange={handleChange}
							value={formState.link}
						/>
						<p>Description</p>
						<input
							type='text'
							className='text'
							id='description'
							onChange={handleChange}
							value={formState.description}
						/>
						<button type='submit' onClick={(e) => handleSubmit(e)}>
							{updateEvent ? 'Update Event' : 'Create Event'}
						</button>
					</form>
				) : null}
				{!newEvent && !deleteEvent ? (
					<section className='eventCreated'>
						<h3>Congrats! Here are your event details!</h3>
						<p>Name: {formState.name}</p>
						<p>Date: {formState.date}</p>
						<p>Time: {formState.time}</p>
						<p>Location: {formState.location}</p>
						<p>Link: {formState.link}</p>
						<p>Description: {formState.description} </p>
						{/* <Link to='/manage'> */}
						<button
							onClick={() => {
								setNewEvent(true);
								setUpdateEvent(true);
							}}>
							I want to edit my event
						</button>
						{/* </Link> */}
						<button
							onClick={() => {
								handleClick();
								setDeleteEvent(true);
							}}>
							I want to delete my event
						</button>
						<button>I want to create a new event</button>
					</section>
				) : null}
				{deleteEvent ? (
					<section className='eventDeleted'>
						<h3> Your event was deleted.</h3>
						<Link to='/'>
							<button>Return Home</button>
						</Link>
					</section>
				) : null}
			</div>
		);
};

export default ManageEvents;