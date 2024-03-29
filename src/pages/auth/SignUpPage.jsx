import PhoneInput from "react-phone-input-2";
import Logo from "../../components/Logo";
import errorIcon from '../../assets/img/error-icon.png';
import 'react-phone-input-2/lib/style.css';
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { changeNumberFormat } from "../../utils/changeNumberFormat";
import { useState } from "react";

const SignUpPage = () => {

   const firstNameRef = useRef();
   const SecondNameRef = useRef();
   const emailRef = useRef();
   const numberRef = useRef();
   const passwordRef = useRef();
   const [visible, setVisible] = useState(false);

   const validateForm = (data) => {

   }

   const sendData = (e) => {
      e.preventDefault();

      const userData = {
         userName: firstNameRef.current.value + ' ' + SecondNameRef.current.value,
         email: emailRef.current.value,
         number: changeNumberFormat(numberRef.current.state.formattedNumber),
         password: passwordRef.current.value
      }

      const isCorrect = validateForm(userData);
   }

   return (
      <div className="auth-wrapper">
         <main className="auth sign-up">
            <Logo fs={66} />
            <form className="sign-up-form">
               <input type="text" ref={firstNameRef} name="firstName" placeholder="First Name" />
               <span className="error"><img src={errorIcon} alt="Error icon" />Имя должно содержать минимум 2 буквы</span>
               <input type="text" ref={SecondNameRef} name="secondName" placeholder="Second Name" />
               <input type="email" ref={emailRef} onClick={() => setVisible(!visible)} placeholder="Email Address" />
               <PhoneInput ref={numberRef} country={'pl'} />
               {visible &&
                  <>
                     <input type="text" ref={passwordRef} name="password" placeholder="Password" />
                     <p className="agree-p">By clicking below and creating an account, I agree to AlaskaTB <NavLink >Terms of Service</NavLink>
                        and <NavLink>Privacy Policy</NavLink>.
                     </p>
                  </>
               }
               <button onClick={e => sendData(e)} className="purple-btn">Create account</button>
            </form>
         </main>
      </div>
   );
}

export default SignUpPage;