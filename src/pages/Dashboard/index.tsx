import { BookOpen, Users } from "lucide-react";
import { useNavigate } from "react-router";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b2dafb] via-[#feefad] to-[#b2dafbcc]">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-16 text-[#00213e]">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-[#3fa3f6] to-[#00213e] bg-clip-text text-transparent">
            Dreamando
          </span>
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          <div
            className="group relative backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#3fa3f633] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 bg-[#feefad]"
            onClick={() => navigate("/student/login")}
          >
            <div className="relative z-10 text-center">
              <div className="p-6 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[#3fa3f6] to-[#b2dafb]">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-[#00213e]">
                Student
              </h2>
              <button
                className="w-full text-white font-medium py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-[#3fa3f6] to-[#b2dafb] hover:from-[#b2dafb] hover:to-[#3fa3f6]"
              >
                Click here!
              </button>
            </div>
          </div>
          <div
            className="group relative backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#fcda494d] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 bg-[#b2dafb]"
          >
            <div className="relative z-10 text-center">
              <div className="p-6 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-[#fcda49] to-[#feefad]">
                <Users className="h-12 w-12 text-[#00213e]" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-[#00213e]">
                Teacher
              </h2>
              <button
                className="w-full font-medium py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 transform group-hover:scale-105 bg-gradient-to-r from-[#fcda49] to-[#feefad] hover:from-[#feefad] hover:to-[#fcda49] text-[#00213e]"
              >
                Click here!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;