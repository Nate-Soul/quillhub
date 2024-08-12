import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";

const JoinCommunityCTA = () => {
  return (
    <section className="py-10">
        <div className="container grid grid-cols-2 gap-0">
            <figure className="relative">
                <Image 
                    src="/media/images/gallery/happy-people-looking-down-with-a-happy-smile-on-their-faces.jpg"
                    alt="a community of happy faces looking down at the camera"
                    height={642}
                    width={628}
                    className="w-full h-full object-cover"
                />
                <figcaption className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-20"></figcaption>
            </figure>
            <div className="p-8 pb-16 bg-primary-900 text-white flex flex-col gap-y-8">
                <SectionHeading 
                    title="Our Community"
                    subtitle="Join our community of writers and win together"
                    headerStyles="text-center"
                />
                <div className="text-2xl font-garamond flex flex-col gap-y-4">
                    <p>
                        Join a vibrant community of writers who share your passion and commitment to writing. Our platform celebrates your milestones with awards like 'Most Consistent Writer of the Year' and provides a supportive environment to share your progress. 
                    </p>
                    <p>
                        Connect, collaborate, and be inspired by fellow authors who are equally passionate about their writing craft. From budding authors to seasoned writers, our community is here to encourage and inspire you every step of the way.. 
                    </p>
                </div>
                <div className="flex items-center justify-center gap-x-6">
                    <button className="btn btn-outline-white py-2 px-8 rounded-3xl font-bold">Explore <span className="bi-arrow-right"></span></button>
                    <button className="btn btn-primary-500 py-2 px-8 rounded-3xl font-bold">Contact Us</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JoinCommunityCTA
