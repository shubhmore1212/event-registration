import React from "react";

import CustomAccordion from "./Accordion";

const faqArray = [
  {
    question: "What is your contact information?",
    answer: "Answer 1",
  },
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 1",
    answer: "Answer 1",
  },
];

const FAQ = () => {
  return (
    <div className="faq-container">
      {faqArray.map((faq, idx) => (
        <CustomAccordion
          key={idx}
          question={faq.question}
          answer={faq.answer}
        ></CustomAccordion>
      ))}
    </div>
  );
};

export default React.memo(FAQ);
