import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";

const AboutSection2 = () => {
  return (
    <section className="relative py-20">
        <div className="container flex items-start gap-x-8">
            <div className="basis-2/5 flex flex-col gap-y-6">
                <SectionHeading
                    fancySubtitle="WHAT ARE WE KNOWN FOR"
                    title="ABOUT QUILLHUB"
                />
                <p>
                    QuillHub is dedicated to helping aspiring authors enhance their writing skills and develop a sustainable writing habit. We understand the challenges writers face in maintaining a consistent schedule. Our platform provides a comprehensive solution through customizable goal setting, progress tracking, motivational rewards, and community recognition. Whether you are an aspiring novelist, blogger, or freelance writer, QuillHub is here to support your writing journey.
                </p>
                <button className="btn btn-primary-500 py-2 px-12 rounded-3xl">
                    Get Started
                    <span className="bi bi-arrow-up-right"></span>
                </button>
            </div>
            <figure className="basis-3/5">
                <Image 
                    src="/media/images/gallery/authors-celebrating-book-launch.jpg" 
                    alt="" 
                    width={726} 
                    height={788} 
                    className="w-full h-full object-cover" 
                />
            </figure>
        </div>
    </section>
  )
}

export default AboutSection2
