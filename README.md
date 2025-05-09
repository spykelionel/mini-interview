# FAQ Accordion Component Challenge

## Overview

This is a React component challenge to implement a responsive FAQ Accordion. The component should display a list of questions and answers, with the ability to expand/collapse answers when clicking on questions.

## Requirements

1. Implement the accordion functionality:

   - Only one answer should be visible at a time
   - Clicking a question should toggle its answer
   - Clicking an open question should close it
   - Clicking a closed question should close any open question and open the clicked one

2. Add proper styling using TailwindCSS:
   - Add hover states for questions
   - Add smooth transitions for expanding/collapsing
   - Style the chevron icon to rotate when the answer is expanded
   - Make the component fully responsive
   - Add focus states for accessibility

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## Component Structure

The `FAQAccordion` component accepts an array of FAQ items as props, where each item has:

- `question`: string - The question text
- `answer`: string - The answer text

## Tips

- Use React's `useState` hook for managing the active state
- Consider using CSS transitions for smooth animations
- Remember to handle keyboard navigation for accessibility
- Test the component at different screen sizes

## Bonus Points

- Add keyboard navigation support
- Implement smooth height transitions
- Add loading states
- Add error handling
- Write unit tests
