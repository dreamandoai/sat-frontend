import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router';
import { type RootState } from '../../store';

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return isAuthenticated ? <Outlet /> : <Navigate to="/student/login" />;
};

export default PrivateRoute;