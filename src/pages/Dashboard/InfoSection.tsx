import React from "react";

import ReadIcon from "../../assets/read.svg";
import CalculatorIcon from "../../assets/calculator.svg";

const InfoSection: React.FC = () => {
  return (
    <div className='w-full bg-[#B2DAFB]'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm bg-white">
            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center pb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto shadow-lg rounded-lg bg-gradient-to-br from-[#3FA3F6] to-[#B2DAFB]">
                <img src={ReadIcon} alt="read_icon" className="text-white" />
              </div>
              <h4 data-slot="card-title" className="leading-none text-[22px] font-bold text-[#00213E]">Reading and Writing</h4>
              <div className="text-[28px] font-bold mb-2 text-[#3FA3F6]" >28 Questions</div>
              <p data-slot="card-description" className="text-muted-foreground text-base text-[#00213E]">
                14 Question types: Adaptive difficulty (Medium → Hard/Easy) for comprehensive assessment across all SAT reading and writing skills.
              </p>
              <div className="mt-4 p-3 bg-[#3FA3F6] rounded-lg">
                <span className="font-bold text-base text-white">⏱ 32 minutes</span>
              </div>
            </div>
          </div>
          <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm bg-white">
            <div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center pb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto shadow-lg rounded-lg bg-gradient-to-br from-[#FCDA49] to-[#FEEFAD]">
                <img src={CalculatorIcon} alt="calculator_icon" />
              </div>
              <h4 data-slot="card-title" className="leading-none text-[22px] font-bold text-[#00213E]">Math</h4>
              <div className="text-[28px] font-bold mb-2 text-[#3FA3F6]" >38 Questions</div>
              <p data-slot="card-description" className="text-muted-foreground text-base text-[#00213E]">
                19 Question types: Demonstrate your mathematical reasoning and problem-solving abilities across algebra, geometry, and data analysis.
              </p>
              <div className="mt-4 p-3 bg-[#3FA3F6] rounded-lg">
                <span className="font-bold text-base text-white">⏱ 70 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection;