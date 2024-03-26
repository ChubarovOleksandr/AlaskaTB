import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import '../../styles/pages/AuthPage.scss'

const AuthPage = () => {
   return (
      <div className="auth-wrapper">
         <main className="auth">
            <Logo fs={66} />
            <NavLink to='/sign-up' className='purple-btn sign-up'>Sign Up</NavLink>
            <span className='or-span'>or</span>
            <NavLink to='/log-in' className='purple-btn log-in'>Log In</NavLink>
            <p className='agree-p'>By signing up you agree to our <NavLink to=''>Trems</NavLink> of Use and <NavLink to=''>Privacy Policy</NavLink>.</p>
         </main>
      </div>
   );
}

export default AuthPage;