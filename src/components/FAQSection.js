import React, { useState } from 'react';
import './FAQSection.css'; // Assuming you have a CSS file for styling

const FAQSection = () => {
  // Questions and answers data
  const faqs = [
    {
      question: "How do I sign up?",
      answer: "You can sign up by clicking the Sign Up button and filling out the form."
    },
    {
      question: "What is the return policy?",
      answer: "Our return policy is 30 days, no questions asked. Contact us for more details."
    },
    
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, including Visa, MasterCard, and American Express. You can also pay using PayPal."
    },
    {
      question: "How secure is my personal information?",
      answer: "We take your privacy and security very seriously. All transactions are encrypted and your personal details are protected according to the highest industry standards."
    },
    {
        question: "How do I sign up?",
        answer: "You can sign up by clicking the Sign Up button and filling out the form."
      },
      {
        question: "What is the return policy?",
        answer: "Our return policy is 30 days, no questions asked. Contact us for more details."
      },
      
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, including Visa, MasterCard, and American Express. You can also pay using PayPal."
      },
      {
        question: "How secure is my personal information?",
        answer: "We take your privacy and security very seriously. All transactions are encrypted and your personal details are protected according to the highest industry standards."
      },
    // Add more FAQs here
  ];


  const [activeIndex, setActiveIndex] = useState(null); // To keep track of the opened FAQ

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Close if clicked again, else open
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className={`faq-item ${index === activeIndex ? 'active' : ''}`} key={index} onClick={() => toggleFAQ(index)}>
          <div className="faq-question">
            {faq.question}
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>If you didn't find the answer you were looking for, please contact us at:</p>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
        {/* Add more contact details if necessary */}
      </div>
    </div>
  );
};

export default FAQSection;