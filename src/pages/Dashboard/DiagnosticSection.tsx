import React from "react";
import { Link } from "react-router-dom";

import WatchIcon from "../../assets/watch.svg";
import QuestionIcon from "../../assets/question.svg";
import MedalIcon from "../../assets/medal.svg";
import RightArrowIcon from "../../assets/right-arrow.svg";

const DiagnosticSection: React.FC = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-20">
        <h1 className='mb-6 font-bold text-4xl'>
          SAT Diagnostic Test
        </h1>
        <p className='mb-12 max-w-4xl mx-auto text-lg text-[#00213e]'>
          For each question type, you will be asked questions at the Easy, Medium, and Hard levels to fully assess your abilities and discover your SAT readiness!
        </p>
        <div className="flex justify-center space-x-12 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center rounded-2 bg-[#B2DAFB]">
              <img src={WatchIcon} alt="watch_icon" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-base text-[#00213E]">
                102 minutes
              </div>
              <div className="text-sm text-[#3FA3F6]">Complete Assessment</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center bg-[#FEEFAD] rounded-full ">
              <img src={QuestionIcon} alt="question_icon" />
            </div>
            <div className="text-left">
              <div className="font-bold text-base text-[#00213E]">
                66 Questions
              </div>
              <div className="text-sm text-[#3FA3F6]">
                Two Main Sections
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#B2DAFB]">
              <img src={MedalIcon} alt='medal_icon' />
            </div>
            <div className="text-left">
              <div className="font-semibold text-base text-[#00213E]">Instant Results</div>
              <div className="text-sm text-[#3FA3F6]">
                Get your detailed score breakdown
              </div>
            </div>
          </div>
        </div>
        <Link 
          className='inline-flex items-center justify-center gap-2 bg-[#FCDA49] px-6 py-2 cursor-pointer rounded-md disabled:opacity-50 shadow-xl hover:scale-105 transition-all duration-200' 
          to="/diagnostic"
        >
          <p className='text-[#00213E] text-lg font-bold'>Start Your SAT Diagnostic</p>
          <img src={RightArrowIcon} alt="right-arrow_icon" className='w-3.5 h-3.5' />
        </Link>
      </div>
    </div>
  )
}

export default DiagnosticSection;