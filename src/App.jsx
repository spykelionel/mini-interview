import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import FAQAccordion from "./components/FAQAccordion";
// import ShoppingCart from "./components/ShoppingCart";

function ShoppingCart() {
  return (
    <div className="text-center text-xl text-gray-700">
      <p>Shopping Cart Page</p>
    </div>
  );
}

function FAQAccordion({ items }) {
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
            <div className="px-4 pb-4 text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// FAQ Data
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
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">
                    Interview Challenge
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    FAQ Accordion
                  </Link>
                  <Link
                    to="/cart"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Shopping Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                      Frequently Asked Questions
                    </h1>
                    <FAQAccordion items={faqData} />
                  </>
                }
              />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
