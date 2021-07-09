import './manageevents.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageEvents = () => {
	const url = 'https://in-your-city-api.herokuapp.com/events/';

	const [newEvent, setNewEvent] = useState(true);

	const [updateEvent, setUpdateEvent] = useState(false);

	const [deleteEvent, setDeleteEvent] = useState(false);

	const [id, setId] = useState('');

	const initialState = {
		name: '',
		date: '',
		time: '',
		location: '',
		link: '',
		description: '',
	};

	const [formState, setFormState] = useState(initialState);

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.id]: e.target.value });
		console.log(formState);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setNewEvent(!newEvent);
		fetch(`${url}${id}`, {
			method: updateEvent ? 'PUT' : 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formState),
		})
			.then((res) => res.json())
			.then((event) => {
				setId(event.id);
				setUpdateEvent(false);
				setNewEvent(false);
				setFormState(event);
			});
	};

	const handleClick = (e) => {
		fetch(url + id, {
			method: 'DELETE',
		})
			.then(console.log('removed'))
			.catch(console.error);
	};

	return (
		<div className='createEvents'>
			{newEvent ? (
				<form className='createEvent'>
					<h3>Create Your Event</h3>
					<h4>Event Name</h4>
					<input
						type='text'
						className='text'
						id='name'
						onChange={handleChange}
						value={formState.name}
					/>
					<h4 className='date-time'>
						Date
						<br />
						YYYY-MM-DD Format
					</h4>
					<input
						type='text'
						className='date'
						id='date'
						onChange={handleChange}
						value={formState.date}
					/>
					<h4 className='date-time'>
						Time
						<br />
						24HR 00:00:00 Format
					</h4>
					<input
						type='text'
						className='time'
						id='time'
						onChange={handleChange}
						value={formState.time}
					/>
					<h4>Location</h4>
					<input
						type='text'
						className='text'
						id='location'
						onChange={handleChange}
						value={formState.location}
					/>
					<h4>Link</h4>
					<input
						type='url'
						className='text'
						id='link'
						onChange={handleChange}
						value={formState.link}
					/>
					<h4>Description</h4>
					<input
						type='textarea'
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
					<p>
						<b>Name: </b>
						{formState.name}
					</p>
					<p>
						<b>Date: </b>
						{formState.date}
					</p>
					<p>
						<b>Time: </b>
						{formState.time}
					</p>
					<p>
						<b>Location: </b>
						{formState.location}
					</p>
					<p>
						<b>Link: </b>
						{formState.link}
					</p>
					<p>
						<b>Description:</b>:{formState.description}{' '}
					</p>
					<button
						onClick={() => {
							setNewEvent(true);
							setUpdateEvent(true);
						}}>
						I want to edit my event
					</button>
					<button
						onClick={() => {
							handleClick();
							setDeleteEvent(true);
						}}>
						I want to delete my event
					</button>
				</section>
			) : null}
			{deleteEvent ? (
				<section className='eventDeleted'>
					<h3> Your event was deleted.</h3>
				</section>
			) : null}
		</div>
	);
};

export default ManageEvents;
