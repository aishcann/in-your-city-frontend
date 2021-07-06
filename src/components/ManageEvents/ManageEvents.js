import './manageevents.scss'

const ManageEvents = () => {
    return (
			<div className='manageEvents'>
				<section className='header'>
					<a href='/'>
						<h1>In Your City</h1>
					</a>
				</section>
				<form className='editEvent'>
					<h3>Edit Your Event</h3>
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
					<button type='submit'>Edit Event</button>
				</form>
			</div>
		);
};

export default ManageEvents;