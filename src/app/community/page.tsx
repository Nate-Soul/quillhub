import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/subcomponents/SectionHeading";
import { communityFeatures, steps, whyUs } from "@/mock-database/community.data";
import { features } from "process";

const page = () => {
  return (
    <>
    <section className="pt-8 border-b-[67px] border-primary-900">
        <div className="container flex items-center gap-x-8">
            <div className="basis-3/5 flex flex-col gap-y-8">
                <hgroup>
                    <h1 className="text-7xl font-bold leading-[93.97px] text-secondary-500">Welcome to the QuillHub Community</h1>
                    <p className="font-alvenir text-dark-400 text-lg">
                        Join a vibrant network of writers passionate about honing their craft and supporting each other's journeys.
                    </p>
                </hgroup>
                <Link href="/signup" className="btn btn-primary-500 py-3 px-20 rounded-3xl w-max">
                    Get Started
                    <span className="bi-arrow-up-right"></span>
                </Link>
            </div>
            <div className="basis-2/5 relative">
                <figure className="h-[505px] w-[505px] rounded-full overflow-hidden border-[0.625rem] border-white">
                    <Image src="/media/images/gallery/business-woman-at-work.jpg" alt="" height={525} width={525} className="w-full h-full object-cover " />
                </figure>
                <figure className="h-[175px] w-[175px] rounded-full overflow-hidden border-[0.625rem] border-white absolute bottom-0 -left-[10%]">
                    <Image src="/media/images/gallery/business-woman-at-work.jpg" alt="" height={180} width={180} className="w-full h-full object-cover " />
                </figure>
            </div>
        </div>
    </section>
    <section className="py-16">
        <div className="container">
            <SectionHeading
                fancySubtitle="WHAT DOES IT OFFER"
                title="WHY JOIN OUR COMMUNITY?"
                headerStyles="text-center mb-16"
            />
            <div className="grid grid-cols-4 gap-6">
            {whyUs?.map((feature, featureIndex) => (
                <div className="flex flex-col gap-y-3 even:flex-col-reverse group" key={featureIndex}>
                    <div className="h-[170px] overflow-hidden rounded-[0.625rem] group-first:rounded-tl-[112px] group-[&:nth-child(2)]:rounded-bl-[112px] group-[&:nth-child(3)]:rounded-br-[112px] group-last:rounded-tr-[112px]">
                        <Image src={feature.imageURL} alt={feature.title} height={320} width={320} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-alvenir text-dark-400 text-lg">
                        <span className="font-extrabold">{feature.title}:</span> {feature.description}
                    </p>
                </div>
            ))}
            </div>
            <div className="flex justify-center items-center mt-20">
                <Link href="/login" className="btn btn-outline-white rounded-[2rem] py-3 px-10">
                    Contact Us
                </Link>
            </div>
        </div>
    </section>
    <section className="py-20 relative">
        <Image 
            src="/media/images/gallery/pretty_young_woman_with_curly_hair.png" 
            alt="" 
            height={648} 
            width={896} 
            className="absolute top-1/2 transform -translate-y-1/2 right-0"
        />
        <div className="container">
            <SectionHeading 
                fancySubtitle="WHAT TO EXPECT"
                title="COMMUNITY FEATURES"
                headerStyles="text-center mb-16"
            />
            <div className="bg-highlight py-16 overflow-hidden">
                <div className="grid grid-cols-4 gap-x-6 -ml-3">
                {communityFeatures.map((feature, featureIndex) => (
                    <div className="card group pt-8 pb-16 px-3 shadow-custom odd:bg-white even:bg-primary-900 even:text-white even:transform even:translate-y-4" key={featureIndex}>
                        <h4 className="group-odd:text-secondary-500 group-even:text-white font-alvenir font-black mb-5 text-lg">{feature.title}</h4>
                        <p className="group-odd:text-dark-400 text-lg font-alvenir">{feature.description}</p>
                    </div>
                ))}
                </div>
                <div className="flex items-center ml-10 gap-x-6 mt-16">
                    <button className="btn btn-primary-500 py-2 px-8 rounded-3xl font-bold">
                        Get Started
                        <span className="bi-arrow-up-right"></span>
                    </button>
                    <button className="btn btn-outline-white py-2 px-8 rounded-3xl font-bold">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section className="relative">
        <div className="grid grid-cols-4">
            <div className="col-span-1 overflow-hidden relative h-full">
                <Image 
                    src="/media/images/gallery/happy-lady-working-in-writing-hub.jpg" 
                    height={708} 
                    width={406} 
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
            </div>
            <div className="col-span-2 bg-white py-16 px-8 h-full">
                <SectionHeading 
                    fancySubtitle="GET INVOLVED"
                    title="JOIN OUR COMMUNITY"
                    subtitle="Join QuillHub's community today and take your writing to the next level with the power of collective motivation and support!"
                    headerStyles="text-center mb-14"
                />
                <ul className="flex flex-col gap-y-8">
                {steps?.map((step, stepIndex) => (
                    <div className="flex items-start gap-x-3" key={stepIndex}>
                        <div>
                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_186_180" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="20">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 10L4.5 7.5L9.5 12.5L19.5 2.5L22 5L9.5 17.5L2 10Z" fill="#555555" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </mask>
                                <g mask="url(#mask0_186_180)">
                                <path d="M0 -2H24V22H0V-2Z" fill="#0FA958"/>
                                </g>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h6>{step.title}</h6>
                            <p>{step.subtext}</p>
                        </div>
                    </div>
                ))}
                </ul>
            </div>
            <div className="col-span-1 overflow-hidden relative h-full">
                <Image 
                    src="/media/images/gallery/happy-lady-working-in-writing-hub.jpg" 
                    height={708} 
                    width={783} 
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
            </div>
        </div>
    </section>
    <section className="py-14">
        <div className="flex">
            <div className="basis-3/5 relative">
                <Image src="/media/images/gallery/woman-in-office-smiling.jpg" alt="" height={920} width={920} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
            </div>
            <div className="basis-2/5 py-10">
                <div className="bg-[#f8f8f8] px-8 py-14 rounded-2xl -ml-[30%] relative w-full">
                    <h3 className="font-extrabold font-alvenir text-3xl text-black mb-10">Send a Message</h3>
                    <form className="flex flex-col gap-y-6">
                        <div className="">
                            <label htmlFor="emailAddress" className="block mb-1">Email</label>
                            <input type="email" name="" id="emailAddress" className="border-[0.4px] border-[#B1AFB7] w-full p-4 rounded-3xl" />
                        </div>
                        <div className="">
                            <label htmlFor="subject" className="block mb-1">Subject</label>
                            <input type="text" name="" id="subject" className="border-[0.4px] border-[#B1AFB7] w-full p-4 rounded-3xl" />
                        </div>
                        <div className="">
                            <label htmlFor="message" className="block mb-1">Message</label>
                            <input type="email" name="" id="message" className="border-[0.4px] border-[#B1AFB7] w-full p-4 rounded-3xl" />
                        </div>
                        <Link href="/signup" className="btn btn-primary-500 py-3 px-20 rounded-3xl w-max block mx-auto mt-10">
                            Send
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default page