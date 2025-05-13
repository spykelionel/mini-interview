// App.jsx
import { useState, useEffect } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FAQAccordion from "./components/FAQAccordion";
import ShoppingCart from "./components/ShoppingCart";

const faqData = [
  {
    question: "What is React?",
    answer:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
  },
  {
    question: "What is TailwindCSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    question: "How does the FAQ Accordion work?",
    answer:
      "The FAQ Accordion displays a list of questions and answers in an accordion format.",
  },
  {
    question: "Is this component responsive?",
    answer:
      "Yes! The FAQ Accordion is fully responsive.",
  },
];

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved
      ? JSON.parse(saved)
      : {
          items: [],
          discount: 0,
          total: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Interview Challenge
              </h1>
              <div className="flex space-x-6 relative">
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                  FAQ Accordion
                </Link>
                <Link to="/cart" className="text-gray-700 hover:text-gray-900 relative">
                  Shopping Cart
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2">
                      {totalItems}
                    </span>
                  )}
                </Link>
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
              <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
