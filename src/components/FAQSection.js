import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Import icons from lucide-react
import './FAQSection.css'; // Assuming you have a CSS file for styling

const FAQSection = () => {
  // Questions and answers data
  const faqs = [
    {
      question: "What is the lead time for shipment?",
      answer: "It takes 2 weeks to export the car from China, followed by approximately 45 days voyage time from Shanghai to the port of your choice."
    },
    {
      question: "What are the shipping costs?",
      answer: "$5240 for one 20GP container - $8830 for one 40GP container - $8830 for one 40HC container"
    },
    {
      question: "How many cars fit in the containers?",
      answer: "20GP container: 2-4 compact EVs, or 1-2 mid-sized EVs - 40GP container: 4-6 compact EVs, or 2-4 mid-sized EVs - 40HC container: Same as 40GP but with more height for SUVs or taller vehicles"
    },
    {
      question: "Estimated Shipping Cost per Car",
      answer: "20GP container: $1310-$2620 per car (for 2-4 cars) | 40GP/40HC container: $1470-$4415 per car (for 2-6 cars)"
    },
    {
      question: "What import procedures are required?",
      answer: "The import procedures depend on the regulations of your designated port, but we provide guidance and support to ensure a smooth process."
    },
    {
      question: "Do you handle car registration in Europe?",
      answer: "The car registration is managed by the local dealer partner of your choice, which you can select from our dealers page."
    },
    {
      question: "Are European certificates required for the cars?",
      answer: "Yes, European certification is essential, and it will be arranged by the local dealer partner you choose from our dealers page."
    },
    {
      question: "Is insurance provided?",
      answer: "Yes, shipping insurance is included with every shipment to cover any potential risks during transit."
    },
    {
      question: "What is the payment structure?",
      answer: "A 30% down payment is required when placing the order, and the remaining 70% is payable upon delivery in China."
    },
    {
      question: "What are the shipping options available?",
      answer: "We offer standard, expedited, and overnight shipping options for all orders."
    },
    {
      question: "Do you sell EV parts separately?",
      answer: "Yes, we offer a variety of EV parts such as batteries, chargers, motors, and control units, available for purchase independently from vehicles."
    },
    {
      question: "Do you offer post-sale technical support?",
      answer: "Yes, post-sale technical support is provided by the local dealer partner you select from our dealers page, helping with car assembly and part integration."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to many countries worldwide. Please check our shipping policy for more details."
    },
    {
      question: "Does the price you quoted including shiping?",
      answer: "It is up to the terms of payment you prefer. Both CIP & CIF include the shipment fee."
    },
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
