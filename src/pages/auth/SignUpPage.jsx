import PhoneInput from "react-phone-input-2";
import Logo from "../../components/Logo";
import 'react-phone-input-2/lib/style.css'
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
   return (
      <div className="auth-wrapper">
         <main className="auth sign-up">
            <Logo fs={66} />
            <form action="POST" className="sign-up-form">
               <input type="text" placeholder="First Name" />
               <input type="text" placeholder="Second Name" />
               <input type="email" placeholder="Email Address" />
               <PhoneInput country={'pl'} />
               <input type="text" placeholder="Password" />
               <p className="agree-p">By clicking below and creating an account, I agree to AlaskaTB <NavLink >Terms of Service</NavLink>
                  and <NavLink>Privacy Policy</NavLink>.
               </p>
               <button className="purple-btn">Create account</button>
            </form>
         </main>
      </div>
   );
}

export default SignUpPage;