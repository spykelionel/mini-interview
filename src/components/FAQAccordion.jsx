/**
 * @typedef {Object} FAQItem
 * @property {string} question - The question text
 * @property {string} answer - The answer text
 */

/**
 * @param {Object} props
 * @param {FAQItem[]} props.items - Array of FAQ items
 */
const FAQAccordion = ({ items }) => {
  // TODO: Add state management for tracking which item is active

  // TODO: Implement toggle functionality

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            // TODO: Add onClick handler
            className="w-full px-6 py-4 text-left bg-white"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                {item.question}
              </h3>
              <span>
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </button>
          <div>
            <div className="px-6 py-4 bg-gray-50">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
