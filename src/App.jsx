import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth/AuthPage"
import LogInPage from "./pages/auth/LogInPage"
import SignUpPage from "./pages/auth/SignUpPage"
import VerificationPage from "./pages/auth/VerificationPage"

function App() {

   return (
      <Routes>
         <Route path="/auth" element={<AuthPage />} />
         <Route path="/log-in" element={<LogInPage />} />
         <Route path="/sign-up" element={<SignUpPage />} />
         <Route path="/verification" element={<VerificationPage />} />
      </Routes>
   )
}

export default App
