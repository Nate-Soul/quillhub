import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";

const JoinCommunityCTA = () => {
  return (
    <section className="py-20">
        <div className="container grid grid-cols-2 gap-0">
            <figure className="relative w-4/5 h-[808px] bg-inherit">
                <Image 
                    src="/media/images/gallery/two-writers-conversing.jpg"
                    alt="a community of happy faces looking down at the camera"
                    height={800}
                    width={800}
                    className="w-full h-full object-cover rounded-3xl"
                />
                <figcaption>
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-1/4 -right-[10%] bg-highlight py-4 px-12 rounded-3xl z-10">
                        <h6 className="font-medium text-lg text-secondary-500">100+ writers</h6>
                        <p className="text-sm font-garamond">trained over the globe</p>
                    </div>
                    <div className="absolute top-1/2 -right-[10%] transform -translate-y-1/2 bg-highlight py-4 px-12 rounded-3xl">
                        <h6 className="font-medium text-lg text-secondary-500">4.8 Ratings</h6>
                        <p className="text-sm font-garamond">Trusted by 80k + Users</p>
                    </div>
                </figcaption>
            </figure>
            <div className="p-8 pb-16 flex flex-col gap-y-8">
                <SectionHeading 
                    fancySubtitle="Our Community"
                    title="Join our community of writers"
                    headerStyles="w-4/5"
                />
                <div className="text-lg font-garamond flex flex-col gap-y-4">
                    <p>
                        Join a vibrant community of writers who share your passion and commitment to writing. Our platform celebrates your milestones with awards like 'Most Consistent Writer of the Year' and provides a supportive environment to share your progress. 
                    </p>
                    <p>
                        Connect, collaborate, and be inspired by fellow authors who are equally passionate about their writing craft. From budding authors to seasoned writers, our community is here to encourage and inspire you every step of the way.. 
                    </p>
                </div>
                <video src="#" poster="/media/images/posters/community_video.png"></video>
                <div className="flex items-center justify-center gap-x-6 mt-10">
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
  )
}

export default JoinCommunityCTA
