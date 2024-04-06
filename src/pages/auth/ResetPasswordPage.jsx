import { useForm } from "react-hook-form";
import Logo from "../../components/Logo";
import errorIcon from '../../assets/img/error-icon.png';
import '../../styles/pages/AuthPage.scss';
import { useDispatch } from "react-redux";
import { sendEmail } from "../../api/resetPasswordAPI";

const ResetPasswordPage = () => {

   const dispatch = useDispatch();
   const {
      formState: {
         errors
      },
      handleSubmit,
      register,
   } = useForm({
      mode: 'onBlur'
   })

   const onSubmit = (data) => {
      dispatch(sendEmail(data.email))
   }

   return (
      <div className="auth-wrapper">
         <main className="auth reset">
            <Logo fs={66} />
            <form onSubmit={handleSubmit(onSubmit)} className="reset-form">
               <span className='instructions'>Please input your email</span>
               <input type="email" name="email" placeholder='Email Address' {...register('email', {
                  required: 'Email field is required!',
                  pattern: {
                     value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                     message: 'Please input valid email!'
                  }
               })} />
               {errors.email && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.email.message}</p>}
               <button className='purple-btn'>Send Code</button>
            </form>
         </main>
      </div>
   );
}

export default ResetPasswordPage;