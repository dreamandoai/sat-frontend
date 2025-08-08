import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Diagnostic from "./pages/Diagnostic";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const handleBackToLanding = () => {
  }

  const handleLoginSuccess = () => {
  }

  const handleNavigateToRegister = () => {
  }

  const handleRegistrationSuccess = () => {
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route 
          path="/login" 
          element={
            <Login 
              onBack={handleBackToLanding}
              onNavigateToRegister={handleNavigateToRegister}
              onLoginSuccess={handleLoginSuccess} />
          }
        >
        </Route>
        <Route 
          path="/register" 
          element={
            <Register 
              onBack={handleBackToLanding} 
              onRegistrationSuccess={handleRegistrationSuccess}
            />
          }
        >    
        </Route>
        <Route path="/diagnostic" element={<Diagnostic />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
