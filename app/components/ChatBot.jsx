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
    "how can i contact you": "You can contact us via phone at +234 80706282374 or email us at solution@lawfirm.com. We are also available through our Contact Us page.",
    "where is your office located": "Our office is located at Ikot Akpan Abia, Uyo, Akwa Ibom. You can find us on Google Maps for directions.",
    "what are your office hours": "Our office hours are Monday to Friday, 9 AM to 5 PM.",
    "how do i schedule a consultation": "You can schedule a consultation by calling us on +234 80706282374 or by filling out the form on our Contact Us page.",
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
    
    // New questions and answers
    "do you offer online consultations": "Yes, we offer virtual consultations via video calls or phone. Please contact us to schedule one.",
    "can you represent me in court": "Yes, our attorneys are experienced in representing clients in court. Contact us to discuss your case.",
    "do you handle immigration cases": "Yes, we provide legal services related to immigration, including visa applications and deportation defense.",
    "what should i bring to my consultation": "Please bring any relevant documents related to your case, such as contracts, legal notices, or identification.",
    "how long will my case take": "The duration of a case varies depending on its complexity. Your attorney will provide an estimated timeline during your consultation.",
    "can you help with estate planning": "Yes, we offer estate planning services, including wills, trusts, and probate matters.",
    "do you handle personal injury cases": "Yes, we specialize in personal injury cases, including car accidents, slip and falls, and medical malpractice.",
    "can you help me with a divorce": "Yes, we have experienced family law attorneys who can assist with divorce, child custody, and alimony matters.",
    "do you offer pro bono services": "We offer pro bono services on a case-by-case basis. Please contact us to discuss your situation.",
    "what is your success rate": "Our success rate varies by case type. We are proud of our track record and can discuss relevant cases during your consultation.",
    "can you help with criminal defense": "Yes, we have experienced criminal defense attorneys who can represent you in criminal cases.",
    "do you handle real estate transactions": "Yes, we provide legal services related to real estate transactions, including buying, selling, and leasing properties.",
    "can you help with bankruptcy": "Yes, we assist clients with bankruptcy filings and related matters. Please contact us for more details.",
    "do you handle employment law cases": "Yes, we represent both employers and employees in employment law cases, including wrongful termination and discrimination.",
    "can you help with intellectual property": "Yes, we offer legal services related to intellectual property, including trademarks, copyrights, and patents.",
    "how do i file a lawsuit": "Filing a lawsuit involves several steps, including filing a complaint with the court. We can guide you through the process.",
    "do you handle medical malpractice cases": "Yes, we have experience handling medical malpractice cases. Please contact us to discuss your case.",
    "can you help with tax law issues": "Yes, we provide legal services related to tax law, including tax disputes and planning.",
    "what is your experience in family law": "Our attorneys have extensive experience in family law, handling cases such as divorce, child custody, and spousal support.",
    "can you help with contract disputes": "Yes, we assist clients with contract disputes, including breach of contract and contract enforcement.",
    "do you offer legal services for startups": "Yes, we provide legal services for startups, including incorporation, contracts, and compliance.",
    "can you help with mergers and acquisitions": "Yes, we have experience handling mergers and acquisitions for businesses of all sizes.",
    "do you handle environmental law cases": "Yes, we provide legal services related to environmental law, including regulatory compliance and litigation.",
    "can you help with defamation cases": "Yes, we represent clients in defamation cases, including libel and slander claims.",
    "do you handle workers' compensation cases": "Yes, we assist clients with workers' compensation claims and related matters.",
    "can you help with insurance claims": "Yes, we provide legal services related to insurance claims, including disputes and settlements.",
    "do you handle debt collection cases": "Yes, we represent both creditors and debtors in debt collection cases.",
    "can you help with landlord-tenant disputes": "Yes, we provide legal services related to landlord-tenant disputes, including evictions and lease agreements.",
    "do you offer mediation services": "Yes, we offer mediation services to help resolve disputes outside of court.",
    "can you help with patent infringement cases": "Yes, we provide legal services related to patent infringement and intellectual property protection.",
    "do you handle class action lawsuits": "Yes, we have experience representing clients in class action lawsuits.",
    "can you help with government contracts": "Yes, we provide legal services related to government contracts, including bidding and compliance.",
    "do you handle antitrust cases": "Yes, we provide legal services related to antitrust law, including mergers and market competition.",
    "can you help with securities law issues": "Yes, we assist clients with securities law matters, including compliance and litigation.",
    "do you offer legal services for nonprofits": "Yes, we provide legal services for nonprofit organizations, including formation and compliance.",
    "can you help with trade secrets protection": "Yes, we offer legal services related to trade secrets protection and litigation.",
    "do you handle construction law cases": "Yes, we provide legal services related to construction law, including contracts and disputes.",
    "can you help with franchise law": "Yes, we assist clients with franchise law matters, including agreements and compliance.",
    "do you offer legal services for veterans": "Yes, we provide legal services for veterans, including benefits claims and appeals.",
    "can you help with international law issues": "Yes, we provide legal services related to international law, including cross-border transactions and disputes.",
    "do you handle aviation law cases": "Yes, we provide legal services related to aviation law, including regulatory compliance and litigation.",
    "can you help with maritime law issues": "Yes, we offer legal services related to maritime law, including shipping and offshore matters.",
    "do you handle healthcare law cases": "Yes, we provide legal services related to healthcare law, including compliance and litigation.",
    "can you help with cyber law issues": "Yes, we provide legal services related to cyber law, including data protection and cybersecurity compliance.",
    "do you handle entertainment law cases": "Yes, we offer legal services related to entertainment law, including contracts and intellectual property.",
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
