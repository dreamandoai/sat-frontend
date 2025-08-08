import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store'

import Dashboard from "./pages/Dashboard";
import Diagnostic from "./pages/Diagnostic";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./layouts/PrivateRoute";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/diagnostic" element={<Diagnostic />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
