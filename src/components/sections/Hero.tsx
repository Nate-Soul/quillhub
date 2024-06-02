import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative py-20">
        <div className="container grid grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-y-6">
            <h6 className="font-medium text-sm text-secondary-500">"Empowering Writers Through Consistency"</h6>
            <h1 className="text-7xl leading-[93.97px] font-bold text-primary-900">Your Ultimate Writing Companion</h1>
            <p className="text-sm text-dark-400 font-garamond">
              Designed to help you build and sustain a strong writing habit. Join our vibrant community of writers and take your writing to the next level.
            </p>
            <div className="flex items-center gap-x-6">
              <Link href="/signup" className="btn btn-primary-500 py-2 px-8 rounded-3xl">
                Get Started
                <span className="bi-arrow-right"></span>
              </Link>
              <Link href="/signup" className="btn btn-outline-primary-500 py-2 px-8 rounded-3xl">
                Join Our Community
              </Link>
            </div>
            <div className="mt-12 flex items-between gap-x-6">
              <div className="flex items-center gap-0">
                <Image src="/media/images/profiles/profile-1.png" alt="" className="rounded-full" height={60} width={60} />
                <Image src="/media/images/profiles/profile-2.png" alt="" className="rounded-full -ml-6" height={60} width={60} />
                <Image src="/media/images/profiles/profile-3.png" alt="" className="rounded-full -ml-6" height={60} width={60} />
                <div className="bg-primary-900 inline-flex justify-center items-center text-white h-[60px] w-[60px] rounded-full -ml-6">
                  <span className="bi-plus"></span>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <h6 className="text-lg font-medium">4.8+ Ratings</h6>
                <p className="text-sm font-garamond text-dark-400">Trusted by 80k + Users</p>
              </div>
            </div>
          </div>
          <figure className="rounded-lg overflow-hidden h-[733px]">
            <Image src="/media/images/gallery/pexels-karolina-grabowska.png" alt="" height={733} width={733} className="rounded-lg w-full h-full object-cover" />
          </figure>
        </div>
    </section>
  )
}

export default Hero
