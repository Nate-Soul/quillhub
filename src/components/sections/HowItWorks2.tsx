import Image from "next/image"
import { title } from "process"
import SectionHeading from "../subcomponents/SectionHeading"


const HowItWorks2 = () => {

    const steps= [
        {
            id: 1,
            title: "Customized Goals",
            description: "QuillHub allows you to tailor your writing journey with customizable goals that fit your lifestyle and ambitions.",
            iconUrl: "/media/images/icons/power_spiral.svg"
        },
        {
            id: 2,
            title: "Stay on Track",
            description: "Visualize your progress and stay on top of your writing schedule with QuillHub's user-friendly tools.",
            iconUrl: "/media/images/icons/pointer.svg"
        },
        {
            id: 3,
            title: "Gamified Tracking",
            description: "Stay inspired with QuillHub's gamified reward system, earning badges and advancing through engaging tiers.",
            iconUrl: "/media/images/icons/game_pad.svg"
        },
    ]

  return (
    <section className="pt-10">
        <div className="container">
            <SectionHeading
                fancySubtitle="OUR WRITING JOURNEY"
                title="HOW IT WORKS"
                headerStyles="mx-auto text-center"
            />
            <div className="grid grid-cols-3 gap-x-8 py-20">
            {steps && steps.map(step => (
                <figure key={step.id} className="flex flex-col gap-y-4 items-center text-center p-3">
                    <Image src={step.iconUrl} alt="" height={46} width={46} />
                    <figcaption className="flex flex-col gap-y-4 text-center">
                        <h4 className="font-medium text-lg text-secondary-500 capitalize">{step.title}</h4>
                        <p className="text-lg text-light-500 leading-[24.59px] font-garamond">{step.description}</p>
                    </figcaption>
                </figure>
            ))

            }
            </div>
            <div className="p-4 bg-primary-900 text-white text-center">
                <p className="text-lg font-garamond">Dreaming of becoming an expert writer? <span className="font-semibold">Get Started</span></p>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks2