import { useState } from "react";

const FAQAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg bg-white">
          <button
            onClick={() => toggle(index)}
            className="w-full px-4 py-3 text-left flex justify-between items-center"
          >
            <span className="font-medium">{item.question}</span>
            <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
