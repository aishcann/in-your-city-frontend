import './manageevents.scss'
import eventData from '../../data.json';

const ManageEvents = () => {
    return (
			<div className='manageEvents'>
				<section className='navbar'>
					<button className='header'>In Your City</button>
					<div>
						<button>Manage Events</button>
						<button>Logout</button>
					</div>
				</section>
				<section className='event'>
					{eventData.map((event) => {
						return (
							<div className='eventInfo'>
								<img src={event.image} alt={event.name} />
								<h3>{event.name}</h3>
								<h4>{event.date}</h4>
								<h4>{event.time}</h4>
								<h4>{event.location}</h4>
								<button>Edit Event</button>
							</div>
						);
					})}
				</section>
			</div>
		);
};

export default ManageEvents;