import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/auth/AuthPage"
import LogInPage from "./pages/auth/LogInPage"
import SignUpPage from "./pages/auth/SignUpPage"

function App() {

   return (
      <Routes>
         <Route path="/auth" element={<AuthPage />} />
         <Route path="/log-in" element={<LogInPage />} />
         <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
   )
}

export default App
