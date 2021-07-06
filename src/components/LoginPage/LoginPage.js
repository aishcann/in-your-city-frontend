import './loginpage.scss'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { breakStatement } from '@babel/types'

const LoginPage = () => {

	const [signup, setSignup] = useState(false)

	const handleClick = () => {
		setSignup(!signup)
	}

    return (
			<div className='login'>
					<section className='header'>
						<a href='/'><h1>In Your City</h1></a>
					</section>
				{!signup ? (
					<form className='loginForm'>
						<h3>Artist Login</h3>
						<p>Email</p>
						<input type='text' className='email' />
						<p>Password</p>
						<input type='text' className='password' />
						<button type='submit'>Submit</button>
						<h3 className='changePage' onClick={handleClick}>
							No Account? Click to sign up!
						</h3>
					</form>
				) : null}

				{signup ? (
					<form className='signupForm'>
						<h3>Sign up to post your events!</h3>
						<p>Email</p>
						<input type='text' className='email' />
						<p>Password</p>
						<input type='text' className='password' />
						<button type='submit'>Submit</button>
						<h3 className='changePage' onClick={handleClick}>
							Have an account? Click to log in!
						</h3>
					</form>
				) : null}
			</div>
		);
};

export default LoginPage;