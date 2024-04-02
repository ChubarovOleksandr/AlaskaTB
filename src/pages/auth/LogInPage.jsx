import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo';
import eye from '../../assets/img/eye.png';
import eyeMoving from '../../assets/gif/eye.gif';
import errorIcon from '../../assets/img/error-icon.png';
import '../../styles/pages/AuthPage.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const LogInPage = () => {

   const [isIcon, setIsIcon] = useState(true);
   const [showPassword, setShowPassword] = useState(false);

   const {
      formState: {
         errors
      },
      handleSubmit,
      register,
   } = useForm({
      mode: 'onBlur'
   })

   const onSubmit = data => {
   }

   return (
      <div className="auth-wrapper">
         <main className="auth log-in">
            <Logo fs={66} />
            <form onSubmit={handleSubmit(onSubmit)} className="log-in-form">
               <span className='input-title'>Email Address</span>
               <input type="email" name="email" placeholder='Email Address' {...register('email', {
                  required: 'Email field is required!',
                  pattern: {
                     value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                     message: 'Please input valid email!'
                  }
               })} />
               {errors.email && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.email.message}</p>}
               <span className='input-title'>Password</span>
               <label>
                  <button
                     type='button'
                     className='eye-btn'
                     onClick={() => setShowPassword(!showPassword)}
                     onMouseEnter={() => setIsIcon(false)}
                     onMouseLeave={() => setIsIcon(true)}
                  >
                     {isIcon ? (
                        <img src={eye} className='eye-img' alt="Eye" />
                     ) : (
                        <img src={eyeMoving} className='eye-gif' alt="Eye gif" />
                     )}
                  </button>
                  <input type={showPassword ? 'text' : 'password'} name="password" placeholder='Password' {...register('password', {
                     required: 'Please input your password!',
                     minLength: {
                        value: 5,
                        message: 'Your password must be longer than 5 symbols!'
                     }
                  })} />
                  {errors.password && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.password.message}</p>}
               </label>
               <NavLink className='forget-btn' to=''>Forgot password?</NavLink>
               <button className='purple-btn'>Log in</button>
            </form>
         </main>
      </div>
   );
}

export default LogInPage;