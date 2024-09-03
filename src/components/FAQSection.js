import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: 'Shipping & Delivery',
      faqs: [
        {
          question: 'Do you offer international shipping?',
          answer: 'Yes, we offer international shipping to most countries. Shipping costs will be calculated at checkout.'
        },
        {
          question: 'How do I track my order?',
          answer: 'You can track your order status by logging into your account and navigating to the order section.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.'
        },
        {
          question: 'How do I exchange an item?',
          answer: 'To exchange an item, contact our support team with your order details, and they will assist you with the process.'
        }
      ]
    },
    {
      category: 'Payment',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods, including credit/debit cards, PayPal, and other secure payment options.'
        },
        {
          question: 'Can I pay in installments?',
          answer: 'Yes, we offer installment payment options through our partnered services. Please select the installment option at checkout.'
        }
      ]
    }
  ];

  return (
    <div className="faq-section">
      <h2>FAQs</h2>
      {faqCategories.map((category, catIndex) => (
        <div key={catIndex} className="faq-category">
          <h3>{category.category}</h3>
          {category.faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === `${catIndex}-${index}` ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleAnswer(`${catIndex}-${index}`)}
              >
                {faq.question}
              </button>
              {activeIndex === `${catIndex}-${index}` && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
