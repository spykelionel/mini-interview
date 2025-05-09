import FAQAccordion from "./components/FAQAccordion";

const faqData = [
  {
    question: "What is React?",
    answer:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
  },
  {
    question: "What is TailwindCSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It's a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build designs directly in your markup.",
  },
  {
    question: "How does the FAQ Accordion work?",
    answer:
      "The FAQ Accordion is a component that displays a list of questions and answers. When a question is clicked, its corresponding answer expands or collapses. Only one answer can be visible at a time, creating an accordion-like effect.",
  },
  {
    question: "Is this component responsive?",
    answer:
      "Yes! The FAQ Accordion is fully responsive and uses Tailwind's utility classes to ensure it looks great on all screen sizes. The typography, spacing, and layout automatically adjust based on the viewport width.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>
        <FAQAccordion items={faqData} />
      </div>
    </div>
  );
}

export default App;
