import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router';
import { type RootState } from '../../store';

interface PrivateRouteProps {
  allowedRoles: string[]
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const { user } = useSelector((state: RootState) => state.auth);

  if(!user) {
    return <Navigate to="/" replace />;
  }

  if(!allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role}/portal`} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;