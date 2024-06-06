import SectionHeading from "../subcomponents/SectionHeading"
import TestimonialCard from "../subcomponents/TestimonialCard";


const Testimonials = () => {

    const reviews = [
        {
            id: 1,
            name: "Sarah J",
            role: "Aspiring Novelist",
            ratings: 5,
            comment: "QuillHub has transformed my writing routine! The goal-setting feature helped me stay on track, and the progress tracking kept me motivated. Earning badges and recognition within the community boosted my confidence and commitment. Now, I'm proud to say I've finished my first novel draft thanks to QuillHub.",
            imageUrl: "/media/images/testimonees/sara-j.png"
        },
        {
            id: 2,
            name: "David M.",
            role: "Freelance Writer",
            ratings: 5,
            comment: "As a freelance writer, maintaining consistency is crucial. QuillHub's intuitive interface and gamified rewards system have been game-changers for me. The email reminders are incredibly helpful in keeping me on schedule, and the community support is fantastic. I highly recommend QuillHub to any writer looking to improve their habits and productivity.",
            imageUrl: "/media/images/testimonees/david-m.png"
        },
        {
            id: 3,
            name: "Emma L.",
            role: "Blogger",
            ratings: 5,
            comment: "QuillHub is exactly what I needed to take my blogging to the next level. Setting personalized goals and tracking my progress has made a huge difference in my writing consistency. The platform’s reward system is both fun and motivating, and I love being part of such a supportive community of writers. QuillHub is a must-have for anyone serious about their writing journey.",
            imageUrl: "/media/images/testimonees/emma-l.png"
        },
    ];

  return (
    <section className="py-16 bg-highlight">
      <div className="container">
        <SectionHeading 
            title="User Reviews"
            subtitle="What our writers are saying"
            headerStyles="mb-10 w-/12"
            dark={false}
        />
        <div className="relative">
            <button className="absolute top-1/2 -translate-y-1/2 left-0 btn h-16 w-14 rounded-3xl bg-white text-dark-400 hover:bg-primary-300 hover:text-light-200">
                <span className="bi-arrow-left"></span>
            </button>
            <button className="absolute top-1/2 -translate-y-1/2 right-0 btn h-16 w-14 rounded-3xl bg-white text-dark-400 hover:bg-primary-300 hover:text-light-200">
                <span className="bi-arrow-right"></span>
            </button>
            <div className="grid grid-cols-3 gap-x-6 w-[85%] mx-auto">
            {reviews?.map(review => (
                <TestimonialCard testimonial={review} key={review.id}/>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
