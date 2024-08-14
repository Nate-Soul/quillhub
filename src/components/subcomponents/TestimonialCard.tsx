import Image from "next/image";

interface TestimonialProps {
    id: number;
    name: string;
    role: string;
    ratings: number;
    comment: string;
    imageUrl: string;
};

interface TestimonialCardProps {
    testimonial: TestimonialProps;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="font-alvenir">
      <div className="min-h-[24rem] p-10 bg-white rounded-tl-lg rounded-br-lg rounded-tr-[88px] rounded-bl-[88px]">
        <p className="text-dark-400">
            &ldquo;
            {testimonial.comment}
            &rdquo;
        </p>
      </div>
      <div className="-mt-[20%]">
        <figure className="h-[5.75rem] w-[5.75rem] mx-auto">
            <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                height={92}
                width={92}
                className="w-full h-full object-cover rounded-full"
            />
        </figure>
        <div className="text-center">
            <p>{testimonial.name} - {testimonial.role}</p>
            <div className="flex items-center justify-center gap-0">
                {Array.from({ length: 5}, (_, index) => (
                    <span key={index} className="bi-star-fill text-[#dc9518]"></span>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
