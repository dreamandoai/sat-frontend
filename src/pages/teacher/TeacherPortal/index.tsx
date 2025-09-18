import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookOpen, Users, Bot, LogOut, MoreHorizontal } from "lucide-react";
import { authService } from "../../../services/authService";
import { logout } from "../../../store/authSlice";
import type { RootState } from "../../../store";
import { useNavigate } from "react-router";

const TeacherPortal: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = useCallback(() => {
    authService.logout();
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#b2dafb]">
    {/* Header */}
    <div className="border-b bg-white border-[rgba(0,33,62,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className="font-heading font-bold text-[28px] text-[#00213e]">
              Teacher Portal
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-medium text-[#00213e] text-[16px]">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="text-[14px] text-[rgba(0,33,62,0.6)]">
                Teacher
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg transition-all duration-300 hover:shadow-lg bg-[rgba(63,163,246,0.1)] border border-[rgba(63,163,246,0.2)] text-[#00213e]"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Students */}
        <div 
          className="p-6 rounded-3xl shadow-xl border cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-[#3fa3f6] border-[rgba(63,163,246,0.3)]"
          onClick={() => navigate('/teacher/students')}
          >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl shadow-lg bg-white">
              <Users className="h-8 w-8 text-[#3fa3f6]" />
            </div>
            <MoreHorizontal className="h-5 w-5 text-[rgba(0,33,62,0.6)]" />
          </div>
          <h3 className="font-heading font-bold mb-2 text-[22px] text-[#00213e]">
            Students
          </h3>
          <p className="mb-4 text-[16px] text-[rgba(0,33,62,0.8)]">
            Monitor student progress and performance
          </p>
          <div className="pt-4 border-t border-[rgba(0,33,62,0.2)]">
            <p className="font-medium text-[14px] text-[#00213e]">
              Enrolled Students
            </p>
          </div>
        </div>

        {/* SAT Resources */}
        <div 
          className="p-6 rounded-3xl shadow-xl border cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-[#feefad] border-[rgba(252,218,73,0.3)]"
          onClick={() => navigate('/teacher/resource')}
          >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl shadow-lg bg-[#00213e]">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <MoreHorizontal className="h-5 w-5 text-[rgba(0,33,62,0.6)]" />
          </div>
          <h3 className="font-heading font-bold mb-2 text-[22px] text-[#00213e]">
            SAT Resources
          </h3>
          <p className="mb-4 text-[16px] text-[rgba(0,33,62,0.7)]">
            Access teaching materials and practice tests
          </p>
          <div className="pt-4 border-t border-[rgba(0,33,62,0.1)]">
            <p className="font-medium text-[14px] text-[#00213e]">
              View Resources
            </p>
          </div>
        </div>

        {/* SAT AI */}
        <div className="p-6 rounded-3xl shadow-xl border cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-[#fcda49] border-[rgba(252,218,73,0.3)]">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl shadow-lg bg-gradient-to-br from-[#00213e] to-[#3fa3f6]">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <MoreHorizontal className="h-5 w-5 text-[rgba(0,33,62,0.6)]" />
          </div>
          <h3 className="font-heading font-bold mb-2 text-[22px] text-[#00213e]">
            SAT AI
          </h3>
          <p className="mb-4 text-[16px] text-[rgba(0,33,62,0.7)]">
            AI-powered tutoring and analysis tools
          </p>
          <div className="pt-4 border-t border-[rgba(0,33,62,0.1)]">
            <p className="font-medium text-[14px] text-[#00213e]">
              AI Assistant
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border bg-white border-[rgba(63,163,246,0.2)]">
          <h4 className="font-heading font-bold mb-2 text-[18px] text-[#00213e]">
            Total Students
          </h4>
          <p className="font-heading font-bold text-[32px] text-[#3fa3f6]">
            24
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white border-[rgba(252,218,73,0.3)]">
          <h4 className="font-heading font-bold mb-2 text-[18px] text-[#00213e]">
            Classes Today
          </h4>
          <p className="font-heading font-bold text-[32px] text-[#fcda49]">
            3
          </p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default TeacherPortal;
