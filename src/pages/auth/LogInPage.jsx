import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import eye from '../../assets/img/eye.png';
import eyeMoving from '../../assets/gif/eye.gif';
import '../../styles/pages/AuthPage.scss';
import { useState } from 'react';

const LogInPage = () => {

   const [isIcon, setIsIcon] = useState(true);
   const [showPassword, setShowPassword] = useState(false);

   const toggleShowPassword = (e) => {
      e.preventDefault();
      setShowPassword(!showPassword)
   }

   return (
      <div className="auth-wrapper">
         <main className="auth log-in">
            <Logo fs={66} />
            <form action="POST" className="log-in-form">
               <span className='input-title'>Email Address</span>
               <input type="e-mail" placeholder='Email Address' />
               <span className='input-title'>Password</span>
               <label>
                  <button
                     className='eye-btn'
                     onClick={(e) => toggleShowPassword(e)}
                     onMouseEnter={() => setIsIcon(false)}
                     onMouseLeave={() => setIsIcon(true)}
                  >
                     {isIcon ? (
                        <img src={eye} className='eye-img' alt="Eye" />
                     ) : (
                        <img src={eyeMoving} className='eye-gif' alt="Eye gif" />
                     )}
                  </button>
                  <input type={showPassword ? 'text' : 'password'} placeholder='Password'>
                  </input>
               </label>
               <NavLink className='forget-btn' to=''>Forgot password?</NavLink>
               <button className='purple-btn'>Log in</button>
            </form>
         </main>
      </div>
   );
}

export default LogInPage;