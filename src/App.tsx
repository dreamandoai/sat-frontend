import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from './store'

import Dashboard from "./pages/Dashboard";
import StudentPortal from "./pages/StudentPortal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./layouts/PrivateRoute";
import DiagnosticTest from "./pages/DiagnosticTest";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/student-portal" element={<StudentPortal />}></Route>
            <Route path="/diagnostic" element={<DiagnosticTest />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
