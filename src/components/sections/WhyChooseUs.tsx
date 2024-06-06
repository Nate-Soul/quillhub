import Image from "next/image";

import SectionHeading from "../subcomponents/SectionHeading";
import WhyChooseUsCard from "../subcomponents/WhyChooseUsCard";

const WhyChooseUs = () => {

    const steps = [
        {
            id: 1,
            iconUrl: "/media/images/icons/mage_goals.svg",
            title: "Personalized Goals",
            subtext: "Tailor your writing journey with customizable goals that fit your lifestyle and ambitions.",
        },
        {
            id: 2,
            iconUrl: "/media/images/icons/progress_clock.svg",
            title: "Progress Tracking",
            subtext: "Visualize your progress and stay on top of your writing schedule with our user-friendly tools.",
        },
        {
            id: 3,
            iconUrl: "/media/images/icons/rewards_trophy.svg",
            title: "Motivational Rewards",
            subtext: "Stay inspired with our gamified reward system, earning badges and advancing through engaging tiers.",
        },
        {
            id: 4,
            iconUrl: "/media/images/icons/people-community-add.svg",
            title: "Supportive Community",
            subtext: "Connect with like-minded authors, share your achievements, and receive recognition for your efforts.",
        },
        {
            id: 5,
            iconUrl: "/media/images/icons/mail_drop.svg",
            title: "Consistent Reminders",
            subtext: "Never miss a writing session with our regular email notifications and reminders.",
        },
    ];

  return (
    <section className="py-16">
        <div className="container">
            <SectionHeading 
                title="Why Choose Us" 
                subtitle="Explore our special features and enjoy writing"
                headerStyles="mb-10 mx-auto text-center"
                dark={false} 
            />
            <div className="flex gap-10">
                <figure className="basis-3/5 rounded-[2rem] overflow-hidden">
                    <Image
                        src="/media/images/gallery/happy-black-woman-working.jpg"
                        alt="Lady author on a cross chair writing on her laptop"
                        height={680}
                        width={680}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="basis-2/5 flex flex-col gap-y-16">
                    <div className="flex flex-col gap-y-8">
                    {steps?.map((step, stepIndex) => (
                        <WhyChooseUsCard step={step} key={stepIndex} />
                    ))}
                    </div>
                    <button className="btn btn-primary-500 py-2 px-8 w-max rounded-[2rem] mx-auto">
                        Start your writing journey
                    </button>                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
