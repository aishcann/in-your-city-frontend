import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import ManageEvents from './components/ManageEvents/ManageEvents';
import { Route } from 'react-router-dom';

const App = () => {
  return (
		<div className='app'>
			<Header/>
			<Route
				path='/'
				exact
				component={HomePage}
				render={() => <HomePage/>}
			/>
			<Route
				path='/manage'
				render={() => <ManageEvents/>}
			/>
		</div>
	);
}

export default App;
