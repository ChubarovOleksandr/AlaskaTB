import { useDispatch, useSelector } from "react-redux";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InputCode from "../../components/InputCode";
import { sendCode } from "../../redux/slice/authSlice";

const VerificationPage = () => {
   const [isFormActive, setIsFormActive] = useState(false);
   const [code, setCode] = useState('');
   const [error, setEror] = useState('');

   const userData = useSelector(state => state.auth.userData);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   useEffect(() => {
      if (!userData.email) {
         navigate('/auth');
      }
   }, [userData.email, navigate]);

   const onSubmit = (e) => {
      e.preventDefault();
      dispatch(sendCode({email: userData.email, code}))
      return false;
   }

   return (
      <div className="auth-wrapper">
         <main className="auth verification">
            <Logo fs={66} />
            <h2 className="instructions">Please check <span>{userData.email}</span> and type a code</h2>
            <form onSubmit={onSubmit} className="verification-form">
               <InputCode setIsFormActive={setIsFormActive} code={code} setCode={setCode}/>
               <button className={`verification-button ${isFormActive ? 'active' : ''}`}>Check it</button>
            </form>
            {error && <p className="error"><img src={errorIcon} alt="Error Icon" />{errors.firstName.message}</p>}
         </main>
      </div>
   );
}

export default VerificationPage;
