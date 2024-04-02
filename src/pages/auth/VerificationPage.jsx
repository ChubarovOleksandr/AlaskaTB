import { useSelector } from "react-redux";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const VerificationPage = () => {
   const [isFormActive, setIsFormActive] = useState(false);
   const [code, setCode] = useState('');
   const userData = useSelector(state => state.auth.userData);
   const navigate = useNavigate();
   const inputRefs = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
   ]

   useEffect(() => {
      if (!userData.email) {
         navigate('/auth');
      }
   }, [userData.email, navigate]);

   useEffect(() => {
      if (code.length === 6 && !code.includes(undefined)) {
         setIsFormActive(true);
      } else {
         setIsFormActive(false);
      }
   }, [code]);


   const sendCode = () => {
      
   }

   const handleFocus = (e) => {
      e.target.select();
   }

   const handleKeyDown = (e, index) => {
      const input = e.target;
      const previousInput = inputRefs[index - 1];
      const nextInput = inputRefs[index + 1];

      if ((e.keyCode === 8 || e.keyCode === 46)) {
         e.preventDefault();
         
         const newCode = [...code];
         input.value = '';
         newCode[index] = '';
         setCode(newCode)

         setCode((prevCode) => {
            const newCode = [...prevCode];
            newCode[index] = '';
            return newCode.join('');
         });
         if (previousInput) {
            previousInput.current.focus();
         }
      }
   }

   const handlePaste = (e) => {
      e.preventDefault();
      const pastedCode = e.clipboardData.getData('text').slice(0, 6);
      const newCode = pastedCode.padEnd(6, '');
      setCode(newCode);
      inputRefs.forEach((inputRef, index) => {
         inputRef.current.value = newCode.charAt(index);
      });
   };

   const handleInput = (e, index) => {
      const input = e.target;

      if (input.value.length > 1) {
         input.value = input.value.charAt(0)
      }

      const newCode = [...code];
      newCode[index] = input.value;
      setCode(newCode)

      const nextInput = inputRefs[index + 1];

      if (input.value && nextInput && input.value.length === 1 && !nextInput.current.value) {
         nextInput.current.focus();
      } else {
         input.blur();
      }
   }

   return (
      <div className="auth-wrapper">
         <main className="auth verification">
            <Logo fs={66} />
            <h2 className="instructions">Please check <span>{userData.email}</span> and type a code</h2>
            <form className="verification-form">
               <div className="inputs">
                  {[0, 1, 2, 3, 4, 5].map(index => (
                     <input type="number"
                        className="verification-input"
                        max={9}
                        min={0}
                        key={index}
                        ref={inputRefs[index]}
                        autoFocus={index === 0}
                        onChange={(e) => handleInput(e, index)}
                        onFocus={handleFocus}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste} />
                  ))}
               </div>
               <button className={`verification-button ${isFormActive ? 'active' : ''}`} onClick={sendCode}>Check it</button>
            </form>
         </main>
      </div>
   );
}

export default VerificationPage;
