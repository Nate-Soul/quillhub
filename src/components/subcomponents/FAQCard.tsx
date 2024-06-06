
interface FAQProps {
    id: number;
    question: string;
    answer: string;
};

interface FAQCardProps {
    qa: FAQProps;
};

const FAQCard: React.FC<FAQCardProps> = ({ qa }) => {

  return (
    <details 
        className="accordion-item py-2 px-5 shadow-custom-sm rounded-lg flex flex-col gap-y-[0.625rem] mb-8" 
        // aria-expanded={false}
        aria-labelledby={`accordionItem${qa.id}`}
    >
        <summary 
            id={`accordionItem${qa.id}`}
            className="accordion-toggler flex items-center justify-between cursor-pointer marker:text-[0]" 
        >
            <h3 className="text-xl font-medium text-dark-400 active:text-black hover:text-black">{qa.question}</h3>
            <span className="accordion-marker bi-plus text-2xl"></span>
        </summary>
        <p className="font-garamond text-light-300">
            {qa.answer}
        </p>
    </details>
  )
}

export default FAQCard
