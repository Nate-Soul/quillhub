import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="bg-highlight h-[150%] w-3/5 border transform -rotate-[15deg] absolute -top-1/4 -right-[10%] -z-[1]"></div>
      <div className="container grid grid-cols-2 gap-x-10">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-7xl leading-[93.97px] font-bold text-primary-900">Get Pro Feedback & Rewards to Level Up Your Writing</h1>
          <p className="text-lg text-dark-400 font-alvenir">
            Designed to help you build and sustain a strong writing potential with expert feedback and a rewarding system that tracks your progress. Join our vibrant community of writers and take your writing to the next level.
          </p>
          <div className="flex items-center gap-x-6">
            <Link href="/signup" className="btn btn-primary-500 py-2 px-12 rounded-3xl">
              Get Started
              <span className="bi-arrow-up-right"></span>
            </Link>
            {/* <Link href="/signup" className="btn btn-outline-primary-500 py-2 px-8 rounded-3xl">
              Join Our Community
            </Link> */}
          </div>
          <div className="mt-8 flex items-between gap-x-6">
            <div className="flex items-center gap-0">
              <Image src="/media/images/profiles/profile-1.png" alt="" className="rounded-full" height={40} width={40} />
              <Image src="/media/images/profiles/profile-2.png" alt="" className="rounded-full -ml-6" height={40} width={40} />
              <Image src="/media/images/profiles/profile-2.png" alt="" className="rounded-full -ml-6" height={40} width={40} />
              <Image src="/media/images/profiles/profile-2.png" alt="" className="rounded-full -ml-6" height={40} width={40} />
              <Image src="/media/images/profiles/profile-2.png" alt="" className="rounded-full -ml-6" height={40} width={40} />
              <Image src="/media/images/profiles/profile-3.png" alt="" className="rounded-full -ml-6" height={40} width={40} />
              <div className="bg-primary-900 inline-flex justify-center items-center text-white h-[40px] w-[40px] rounded-full -ml-6 text-lg font-bold">
                <span className="bi-plus"></span>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <h6 className="text-lg font-medium">4.8+ Ratings</h6>
              <p className="text-sm font-alvenir text-dark-400">Trusted by 80k + Users</p>
            </div>
          </div>
        </div>
        <figure>
          <Image src="/media/images/gallery/users-dashboard.png" alt="" height={600} width={600} className="object-cover -rotate-[5deg] rounded-2xl absolute -right-[15%] top-0 w-3/5 opacity-40" priority/>
        </figure>
      </div>
    </section>
  )
}

export default Hero
