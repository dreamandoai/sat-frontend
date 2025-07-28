import React from "react";
import TailorIcon from "../../assets/tailer.svg";
import BrainIcon from "../../assets/brain.svg";
import UsersIcon from "../../assets/users.svg"

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-[#FEEFAD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div data-slot="card" className="flex flex-col bg-white gap-6 rounded-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div data-slot="card-header" className="grid auto-rows-auto grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center pb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto shadow-lg rounded-lg bg-[#00213E]">
                <img src={TailorIcon} alt="tailor_icon" />
              </div>
              <h4 data-slot="card-title" className="leading-none text-[22px] font-bold text-[#00213E]">
                Tailor-made classNamees
              </h4>
              <p data-slot="card-description" className="text-base text-[#00213E]">
                Receive a free consultation to get a tailor-made class program and offers to maximize your score!
              </p>
            </div>
          </div>
          <div data-slot="card" className="flex flex-col bg-white gap-6 rounded-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div data-slot="card-header" className="grid auto-rows-auto grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center pb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto shadow-lg rounded-lg bg-[#3FA3F6]">
                <img className="stroke-white" src={BrainIcon} alt="brain_icon" />
              </div>
              <h4 data-slot="card-title" className="leading-none text-[22px] font-bold text-[#00213E]">
                Adaptive Question Generation
              </h4>
              <p data-slot="card-description" className="text-base text-[#00213E]">
                For each medium question, based on your answer, receive an Easy or Hard question to determine your full level, weaknesses and strengths.
              </p>
            </div>
          </div>
          <div data-slot="card" className="flex flex-col bg-white gap-6 rounded-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div data-slot="card-header" className="grid auto-rows-auto grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center pb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto shadow-lg rounded-lg bg-[#FCDA49]">
                <img src={UsersIcon} alt="users_icon" />
              </div>
              <h4 data-slot="card-title" className="leading-none text-[22px] font-bold text-[#00213E]">
                Expert Analysis
              </h4>
              <p data-slot="card-description" className="text-base text-[#00213E]">
                After receiving your results, have a short call with an SAT expert to receive a personalized study plan and get insight into your level!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
