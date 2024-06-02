import Image from "next/image"
import SectionHeading from "../subcomponents/SectionHeading"


const AboutSection = () => {
  return (
    <section className="bg-highlight pt-20 h-[612px] overflow-hidden relative">
        <div className="absolute -top-[52px] left-1/2 -translate-x-1/2 h-[126px] w-[425px] bg-white rounded-full"></div>
      <div className="container">
        <SectionHeading title="About Us" headerStyles="mx-auto text-center mt-6 mb-10" dark={false} />
        <div className="flex flex-col gap-y-8">
            <div className="w-3/5 mx-auto font-garamond text-black">
                <p>
                    QuillHub is dedicated to helping aspiring authors enhance their writing skills and develop a sustainable writing habit. We understand the challenges writers face in maintaining a consistent schedule. Our platform provides a comprehensive solution through customizable goal setting, progress tracking, motivational rewards, and community recognition. Whether you are an aspiring novelist, blogger, or freelance writer, QuillHub is here to support your writing journey.
                </p>
            </div>
            <div className="flex items-center justify-center gap-x-6">
                <button className="btn btn-outline-white py-2 px-8 rounded-3xl font-bold">
                    Explore <span className="bi-arrow-right"></span>
                </button>
                <button className="btn btn-primary-500 py-2 px-8 rounded-3xl font-bold">
                    Contact Us
                </button>
            </div>
            <div className="grid grid-cols-3 gap-0">
                <figure className="rounded-s-3xl overflow-hidden">
                    <Image 
                        src="/media/images/gallery/hand-typing-on-laptop.jpg" 
                        alt="" 
                        width={407} 
                        height={341} 
                        className="w-full h-full object-cover" />
                </figure>
                <figure className="">
                    <Image 
                        src="/media/images/gallery/hub-of-writers.jpg" 
                        alt="" 
                        width={407} 
                        height={341} 
                        className="w-full h-full object-cover" />
                </figure>
                <figure className="rounded-e-3xl overflow-hidden">
                    <Image 
                        src="/media/images/gallery/authors-celebrating-book-launch.jpg" 
                        alt="" 
                        width={407} 
                        height={341} 
                        className="w-full h-full object-cover" />
                </figure>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
