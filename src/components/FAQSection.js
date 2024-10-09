import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Import icons from lucide-react
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
      question: "How can I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password?' link on the login page."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support via email at support@evrabbit.com or by calling +1 (779) 707-1757."
    },
    {
      question: "What are the shipping options available?",
      answer: "We offer standard, expedited, and overnight shipping options for all orders."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to many countries worldwide. Please check our shipping policy for more details."
    },
    {
      question: "Does the price you quoted including shiping?",
      answer: "It is up to the terms of payment you prefer. Both CIP & CIF include the shipment fee."
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
            {index === activeIndex ? <Minus size={20} /> : <Plus size={20} />}
            <span>{faq.question}</span>
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
