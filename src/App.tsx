import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Diagnostic from "./pages/Diagnostic";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/diagnostic" element={<Diagnostic />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
