import React from "react";

interface HowItWorksProps {
    id: number;
    title: string;
    subtext: string;
    associatedColor: string;
};

interface HowItWorksCardProps {
    step: HowItWorksProps;
};

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ step }) => {
  return (
    <div className="border-[0.5px] rounded-3xl py-2 px-5">
        <h6 
            className={`flex items-center gap-x-2 text-lg font-medium text-secondary-500 before:w-[28px] before:h-[28px] before:rounded-full before:bg-${step.associatedColor}`}
        >
            {step.title}
        </h6>
        <p className="font-garamond text-light-500 ml-[85px]">{step.subtext}</p>
    </div>
  )
}

export default HowItWorksCard
