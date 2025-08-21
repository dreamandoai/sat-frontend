import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User, LogOut } from 'lucide-react';
import { Button } from '../../components/Button';
import { authService } from '../../services/authService';
import { logout } from '../../store/authSlice';
import type { RootState } from '../../store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = useCallback(() => {
    authService.logout();
    dispatch(logout());
  }, [dispatch]);

  return (
    <header className="bg-white shadow-sm border-b border-sky-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-sky-blue rounded-full p-2">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-dark-blue">Welcome, {user?.first_name}!</h1>
              <p className="text-small text-dark-blue opacity-70">
                Target Score: {user?.target_score}
              </p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header;