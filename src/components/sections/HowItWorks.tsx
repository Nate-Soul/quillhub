import Image from "next/image";

import SectionHeading from "../subcomponents/SectionHeading";
import HowItWorksCard from "../subcomponents/HowItWorksCard";

const HowItWorks = () => {

    const steps = [
        {
            id: 1,
            title: "Set Your Goals",
            subtext: "Customize your writing frequency and targets, whether daily, weekly, or monthly.",
            associatedColor: "#CFB4D5"
        },
        {
            id: 2,
            title: "Track Your Progress",
            subtext: "Use our intuitive interface to monitor your achievements and milestones.",
            associatedColor: "#ACEFC1"
        },
        {
            id: 3,
            title: "Earn Rewards",
            subtext: "Receive badges and advance through tiers as you write more and engage with the community.",
            associatedColor: "#DDA7AA"
        },
        {
            id: 4,
            title: "Stay Motivated",
            subtext: "Get timely email reminders and motivational boosts to keep you on track.",
            associatedColor: "#EAC58A"
        },
        {
            id: 5,
            title: "Join the Community",
            subtext: "Share your success and get recognized with awards for your consistency and quality.",
            associatedColor: "#8FDDE2"
        },
    ];

  return (
    <section className="py-16 relative">
        <Image 
            src="/media/images/gallery/bg-2.png"
            alt=""
            height={892}
            width={491}
            className="absolute top-0 right-0 object-contain"
        />
        <div className="container relative">
            <SectionHeading
                title="Your Writing Journey"
                fancySubtitle="How QuillHub works"
                headerStyles="mb-10 w-1/2"
            />
            <div className="flex gap-10 items-center">
                <div className="basis-1/2 flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-8">
                    {steps?.map(step => (
                        <HowItWorksCard step={step} key={step.id} />
                    ))}
                    </div>
                    <button className="btn btn-outline-primary-500 py-2 px-8 mx-auto w-max rounded-4xl">
                        Get Started
                        <span className="bi-arrow-right"></span>
                    </button>
                </div>
                <div className="basis-1/2">
                    <div className="relative">
                        <Image
                            src="/media/images/gallery/happy-lady-working-in-writing-hub.jpg"
                            alt="happy lady writing on her laptop in a writing hub"
                            height={276}
                            width={313}
                            className="border-[1rem] w-1/2 h-1/2 border-white object-cover absolute left-4 -top-32"
                        />
                        <Image
                            src="/media/images/gallery/author-working-early-on-bed.jpg"
                            alt="author writing early on his laptop with coffee in hand"
                            height={558}
                            width={688}
                            className="border-[2rem] w-full h-full border-white object-cover mt-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks
