"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const rules = {
    "hello": "Good Day! How may I be of assistance?",
    "what services do you offer": "We offer a range of legal services, including family law, business law, contract drafting, and more. Please visit our Services page for more details.",
    "how can i contact you": "You can contact us via phone at (123) 456-7890 or email us at contact@lawfirm.com. We are also available through our Contact Us page.",
    "where is your office located": "Our office is located at 123 Main Street, Anytown, USA. You can find us on Google Maps for directions.",
    "what are your office hours": "Our office hours are Monday to Friday, 9 AM to 5 PM.",
    "how do i schedule a consultation": "You can schedule a consultation by calling us at (123) 456-7890 or by filling out the form on our Contact Us page.",
    "is the first consultation free": "Yes, we offer a free initial consultation for new clients. Please contact us to schedule your appointment.",
    "how much do you charge for a consultation": "Consultation fees vary depending on the case type. Please contact us for more detailed information.",
    "do you handle family law cases": "Yes, we specialize in family law cases, including divorce, child custody, and more.",
    "can you help with contract drafting": "Absolutely! We offer contract drafting services tailored to your needs.",
    "do you offer business legal services": "Yes, we provide a variety of business legal services, including incorporation, contracts, and compliance.",
    "what are your payment options": "We accept payments via credit card, bank transfer, and check. Please contact us for more details.",
    "do you offer payment plans": "Yes, we do offer flexible payment plans. Please discuss this with your attorney during your consultation.",
    "how much do you charge for legal services": "Our fees depend on the type of legal service required. We offer competitive pricing and are happy to discuss this further during a consultation.",
    "how can i check the status of my case": "You can check the status of your case by contacting your assigned lawyer directly or by calling our office at (123) 456-7890.",
    "can i talk to my lawyer directly": "Yes, you can talk to your lawyer directly. Please reach out to them via their provided contact details.",
  };

  const getResponse = (input) => {
    const normalizedInput = input.toLowerCase();
    return rules[normalizedInput] || "I'm sorry, I don't understand that question. Could you please rephrase?";
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = input.trim();
      const botResponse = getResponse(userMessage);
      setMessages([...messages, { type: 'user', text: userMessage }, { type: 'bot', text: botResponse }]);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg"
      >
        {isOpen ? 'Close Chat' : 'Chat with Us'}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-80 h-96 bg-gray-900 shadow-lg rounded-lg mt-3 flex flex-col text-white"
        >
          <div className="flex-1 overflow-y-auto p-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white self-end'
                    : 'bg-gray-700 text-white self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="mt-2 w-full bg-blue-600 text-white p-2 rounded"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Chatbot;
