import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from './store'

import RoleSelection from "./pages/RoleSelection";
import StudentPortal from "./pages/student/StudentPortal";
import StudentLogin from "./pages/student/Login";
import StudentRegister from "./pages/student/Register";
import TeacherLogin from "./pages/teacher/Login";
import TeacherRegister from "./pages/teacher/Register";
import TeacherPortal from "./pages/teacher/TeacherPortal";
import PrivateRoute from "./layouts/PrivateRoute";
import DiagnosticTest from "./pages/student/DiagnosticTest";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoleSelection />} /> 
          <Route path="student">
            <Route path="login" element={<StudentLogin />} />
            <Route path="register" element={<StudentRegister />} />
            <Route element={<PrivateRoute allowedRoles={["student"]} />}>
              <Route path="portal" element={<StudentPortal />} />
              <Route path="diagnostic" element={<DiagnosticTest />} />
            </Route>
          </Route>
          <Route path="teacher">
            <Route path="login" element={<TeacherLogin />} />
            <Route path="register" element={<TeacherRegister />} />
            <Route element={<PrivateRoute allowedRoles={["teacher"]} />}>
              <Route path="portal" element={<TeacherPortal />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
