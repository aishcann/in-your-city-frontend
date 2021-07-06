import HomePage from './components/HomePage/HomePage';
import EventDetail from './components/ManageEvents/ManageEvents';
import LoginPage from './components/LoginPage/LoginPage';
import CreateEvents from './components/CreateEvents/CreateEvents';
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
				path='/manage'
				render={(routerProps) => <EventDetail match={routerProps.match} />}
			/>
			<Route
				path='/login'
				render={(routerProps) => <LoginPage match={routerProps.match} />}
			/>
			<Route
				path='/create'
				render={(routerProps) => <CreateEvents match={routerProps.match} />}
			/>
		</div>
	);
}

export default App;
