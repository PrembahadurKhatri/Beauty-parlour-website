import React, { useState } from 'react';


const faqs = [
  { question: "Which payment methods do you accept?", answer: "We accept major Esewa, Khalti, IME Pay and Paypal." },
  { question: "How do I apply a Promo Coupons?", answer: "Promo coupons can be applied to your order during checkout, in the Order Summary section. Promo coupons have expiration dates." },
  { question: "Where can I find the Obsession Cosmetics Stores?", answer: "We have four stores located in Kathmandu, Bhaktapur, Patan and Pokhara." },
  { question: "How do I make a return?", answer: "Purchases made on our website can be returned for any reason up to 30 days after delivery. Bring the item and a valid receipt or packing slip into any Obsession Cosmetics store, or contact obsessioncosmetics@gmail.com to start the return process." },
  { question: "My item arrived damaged, what should I do?", answer: "Please contact us at obsessioncosmetics@gmail.com and provide a photo of the damaged or defective product along with a copy of the packing slip or order number. If the product is deemed defective we will replace the product at no additional charge." },
  { question: "When will my order ship?", answer: "It will take 24-48 hours to ship your product." }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
    //index vaneko position number ho list bhitra.activeIndex vaneko:"kun question currently open cha?"
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);// If the clicked question is already active, set it to null to hide the answer. Otherwise, set it to the clicked index to show the answer.
  };

  return (
    <div>
  
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-container">

        
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">


            {/*"Always faq-question class laga,ani agar yo question open cha bhane active class pani laga" */}
            <div 
              className={`faq-question ${activeIndex === index ? "active" : ""}`} 
              onClick={() => toggleAnswer(index)}> {/* Add an onClick handler to toggle the answer when the question is clicked. Also, add an "active" class to style the active question differently if needed.*/}


              {/* Display the question text and make it clickable to toggle the answer.*/}
              {faq.question} 
            
            {/* Display a plus sign if the answer is hidden, and a minus sign if the answer is visible. */}
              <span className="plus">{activeIndex === index ? '-' : '+'}</span>
                
                </div>

            {/* Conditionally render the answer only if the current index matches the active index, meaning the question is clicked and the answer should be shown.*/}
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default FAQ;