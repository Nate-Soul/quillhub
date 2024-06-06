import Image from "next/image";

interface StepsProps {
    id: number;
    title: string;
    subtext: string;
    iconUrl: string;
};

interface WhyChooseUsCardProps {
    step: StepsProps
};


const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ step }) => {
  return (
    <figure key={step.id} className="flex items-start gap-x-3 rounded-2xl shadow-custom-sm p-2">
        <Image 
            src={step.iconUrl}
            alt={step.title}
            height={40}
            width={40}
        />
        <figcaption>
            <h6 className="font-medium text-lg mb-3">{step.title}</h6>
            <p className="text-light-500 font-garamond">{step.subtext}</p>
        </figcaption>
    </figure>
  )
}

export default WhyChooseUsCard
