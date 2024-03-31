import PhoneInput from "react-phone-input-2";
import Logo from "../../components/Logo";
import errorIcon from '../../assets/img/error-icon.png';
import 'react-phone-input-2/lib/style.css';
import { NavLink } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const SignUpPage = () => {

   const {
      register,
      formState: {
         errors
      },
      handleSubmit,
      control,
      setValue
   } = useForm({
      mode: "onBlur",
   })

   const onSubmit = (data) => {
      alert(JSON.stringify(data))
   }

   return (
      <div className="auth-wrapper">
         <main className="auth sign-up">
            <Logo fs={66} />
            <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
               <input type="text" placeholder="First Name" {...register('firstName', {
                  required: 'First name field is required!',
                  minLength: {
                     value: 2,
                     message: 'Your first name must be longer than 2 symbols'
                  },
                  maxLength: {
                     value: 24,
                     message: 'Your first name must be shorter than 24 symbols!'
                  }
               })} />
               {errors.firstName && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.firstName.message}</p>}
               <input type="text" placeholder="Second Name" {...register('secondName', {
                  required: 'Second name field is required!',
                  minLength: {
                     value: 2,
                     message: 'Your second name must be longer than 2 symbols'
                  },
                  maxLength: {
                     value: 24,
                     message: 'Your second name must be shorter than 24 symbols!'
                  }
               })} />
               {errors.secondName && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.secondName.message}</p>}
               <input type="email" placeholder="Email Address" {...register('email', {
                  required: 'Email field is required!',
                  pattern: {
                     value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                     message: 'Please input valid email!'
                  }
               })} />
               {errors.email && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.email.message}</p>}
               <div className="account-type">
                  <span className="caption">Account Type</span>
                  <label>
                     <input type="radio" value="customer" {...register('accountType', { required: 'Please select your account type!' })} />
                     Customer
                  </label>
                  <label>
                     <input type="radio" value="executor" {...register('accountType', { required: 'Please select your account type!' })} />
                     Executor
                  </label>
               </div>
               {errors.accountType && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.accountType.message}</p>}
               <Controller
                  control={control}
                  name="phoneNumber"
                  rules={{
                     required: 'Phone number is required!',
                     minLength: {
                        value: 7,
                        message: 'Your phone number must be longer than 7 symbols'
                     },
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                     <PhoneInput
                        country={'pl'}
                        value={value}
                        onChange={(phone) => {
                           setValue("phoneNumber", phone);
                           onChange(phone);
                        }}
                     />
                  )}>
               </Controller>
               {errors.phoneNumber && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.phoneNumber.message}</p>}
               <input type="text" name="password" placeholder="Password" {...register('password', {
                  required: 'Please input your password!',
                  minLength: {
                     value: 5,
                     message: 'Your password must be longer than 5 symbols!'
                  }
               })}/>
               {errors.password && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.password.message}</p>}
               <p className="agree-p">By clicking below and creating an account, I agree to AlaskaTB <NavLink >Terms of Service</NavLink>
                  and <NavLink>Privacy Policy</NavLink>.
               </p>
               <button className="purple-btn">Create account</button>
            </form>
         </main>
      </div >
   );
}

export default SignUpPage;