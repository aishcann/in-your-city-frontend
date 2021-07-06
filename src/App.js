import HomePage from './components/HomePage/HomePage';
import EventDetail from './components/EventDetail/EventDetail';
import LoginPage from './components/LoginPage/LoginPage';
import ManageEvents from './components/ManageEvents/ManageEvents';
import { Route } from 'react-router-dom';

const App = () => {
  return (
		<div className='app'>
			<Route
				path='/'
				exact
				component={HomePage}
				render={(routerProps) => <HomePage match={routerProps.match} />}
			/>
			<Route
				path='/event/:id'
				render={(routerProps) => <EventDetail match={routerProps.match} />}
			/>
			<Route
				path='/login'
				render={(routerProps) => <LoginPage match={routerProps.match} />}
			/>
			<Route
				path='/manage'
				render={(routerProps) => <ManageEvents match={routerProps.match} />}
			/>
		</div>
	);
}

export default App;
