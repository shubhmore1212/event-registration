import React from "react";

import CustomAccordion from "./Accordion";

const faqArray = [
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
  {
    question: "Question 1",
    answer: "Answer 1",
  },
];

const FAQ = () => {
  return (
    <div className="faq-container">
      {faqArray.map((faq) => (
        <CustomAccordion
          question={faq.question}
          answer={faq.answer}
        ></CustomAccordion>
      ))}
    </div>
  );
};

export default React.memo(FAQ);
