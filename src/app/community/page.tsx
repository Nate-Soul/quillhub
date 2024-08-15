import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/subcomponents/SectionHeading";
import { communityFeatures } from "@/mock-database/community.data";

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
            {communityFeatures?.map((feature, featureIndex) => (
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
    </>
  )
}

export default page