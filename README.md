# Frontend Developer Interview Challenge

## Time Limit: 30 minutes

Complete both questions within the time limit. You can choose which question to start with.

## Question 1: Algorithmic Challenge

Choose ONE of the following problems to solve:

### Option A: Array Rotation with Minimum Steps. Use any programming language of your choice

```javascript
// Problem: Given an array of numbers, find the minimum number of rotations needed
// to make all elements equal. A rotation is defined as moving the last element to the front.
// Example:
// Input: [3, 4, 5, 1, 2]
// Output: 2 (rotate twice to get [1, 2, 3, 4, 5])
// Input: [1, 2, 3, 4, 5]
// Output: 0 (already sorted)
```

### Option B: Balanced Parentheses with Multiple Types

```javascript
// Problem: Given a string containing different types of brackets ((), [], {}),
// determine if the brackets are balanced.
// Example:
// Input: "({[]})"
// Output: true
// Input: "([)]"
// Output: false
// Input: "((("
// Output: false
```

### Option C: Find Missing Number in Sorted Array

```javascript
// Problem: Given a sorted array of n-1 integers in the range of 1 to n,
// find the missing number. The array may contain duplicates.
// Example:
// Input: [1, 2, 3, 5, 5, 6, 7, 8, 9, 10]
// Output: 4
// Input: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: 10
```

## Question 2: FAQ Accordion Component

### Overview

Implement a responsive FAQ Accordion component that displays a list of questions and answers, with the ability to expand/collapse answers when clicking on questions.

### Requirements

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

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

### Component Structure

The `FAQAccordion` component accepts an array of FAQ items as props, where each item has:

- `question`: string - The question text
- `answer`: string - The answer text

### Tips

- Use React's `useState` hook for managing the active state
- Consider using CSS transitions for smooth animations
- Remember to handle keyboard navigation for accessibility
- Test the component at different screen sizes

### Bonus Points

- Add keyboard navigation support
- Implement smooth height transitions
- Add loading states
- Add error handling
- Write unit tests
