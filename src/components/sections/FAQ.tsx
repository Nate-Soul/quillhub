import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";
import FAQCard from "../subcomponents/FAQCard";

const FAQ = () => {

    const qas = [
        {
            id: 1,
            question: "How do I set my writing goals on QuillHub?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eligendi quidem asperiores veniam eum minima repellendus quia. Repellendus, quam? Ducimus, vitae amet assumenda vel ipsam libero officiis et a dolor."
        },
        {
            id: 2,
            question: "Is there a mobile app available?",
            answer: "Yes, QuillHub is accessible on both web and mobile devices, ensuring you can track your writing habits anytime, anywhere."
        },
        {
            id: 3,
            question: "What kind of rewards can I earn on QuillHub?",
            answer: "Yes, QuillHub is accessible on both web and mobile devices, ensuring you can track your writing habits anytime, anywhere."
        },
        {
            id: 4,
            question: "What is QuillHub?",
            answer: "Yes, QuillHub is accessible on both web and mobile devices, ensuring you can track your writing habits anytime, anywhere."
        },
        {
            id: 5,
            question: "Can I track my progress on QuillHub?",
            answer: "Yes, QuillHub is accessible on both web and mobile devices, ensuring you can track your writing habits anytime, anywhere."
        },
        {
            id: 6,
            question: "How does QuillHub help me stay motivated?",
            answer: "Yes, QuillHub is accessible on both web and mobile devices, ensuring you can track your writing habits anytime, anywhere."
        },
        {
            id: 7,
            question: "Is QuillHub suitable for all types of writers?",
            answer: "Yes, QuillHub is accessible on both web and mobile devices, ensuring you can track your writing habits anytime, anywhere."
        },
        {
            id: 8,
            question: "How does the community aspect of QuillHub work?",
            answer: "Yes, QuillHub is accessible on both web and mobile devices, ensuring you can track your writing habits anytime, anywhere."
        },
    ];

  return (
    <section className="py-16">
      <div className="container">
        <SectionHeading
            title="FAQs"
            subtitle="Our most frequent questions"
            headerStyles="mb-10"
        />
        <div className="columns-2">
            <div>
            {qas?.map(qa => (
                <FAQCard qa={qa} key={qa.id}/>
            ))}
            </div>
        </div>
        <div className="grid grid-cols-2 gap-0 mt-10">
            <figure className="rounded-3xl overflow-hidden">
                <Image
                    src="/media/images/gallery/creating-a-blog-post-outline.jpg"
                    alt="Writer creating a blog post outline on her laptop"
                    height={641}
                    width={641}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="p-5">
                <h4 className="text-xl mb-8">Do you have new questions? Ask away!</h4>
                <form className="flex flex-col gap-y-4">
                    <input 
                        type="text" 
                        name="query_name" 
                        id="queryName" 
                        className="bg-white rounded-lg py-2 px-3 border border-light-500" 
                        placeholder="Name"
                    />
                    <input 
                        type="email" 
                        name="query_email" 
                        id="queryEmail" 
                        className="bg-white rounded-lg py-2 px-3 border border-light-500" 
                        placeholder="Email Address"
                    />
                    <textarea 
                        name="query_message" 
                        id="queryMessage"
                        rows={5}
                        placeholder="Message"
                        className="bg-white rounded-lg py-2 px-3 border border-light-500"
                    ></textarea>
                    <button className="btn btn-primary-500 py-2 px-8 mx-auto mt-10 w-max rounded-4xl">Send Message</button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
