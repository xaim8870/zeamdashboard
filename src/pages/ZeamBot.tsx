import { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const ZeamBot = () => {
  const { theme } = useContext(ThemeContext);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hello, Doctor! I\'m ZeamBot, your AI assistant for health insights. Provide patient health parameters (e.g., heart rate, blood pressure, mood) and I\'ll analyze them.' }
  ]);
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: input }]);

    // Simulate AI response based on input (in a real app, this would call an API)
    let botResponse = 'Thank you for the input. Analyzing...';
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('heart rate')) {
      botResponse = 'Based on the provided heart rate, it appears stable at 72 bpm. No immediate concerns, but monitor for trends.';
    } else if (lowerInput.includes('blood pressure')) {
      botResponse = 'Blood pressure readings suggest mild hypertension. Recommend lifestyle adjustments and follow-up.';
    } else if (lowerInput.includes('mood') || lowerInput.includes('activity')) {
      botResponse = 'Mood is stable and activity moderate. Suggest continuing current treatment plan.';
    } else {
      botResponse = 'I received the parameters. Insights: All vitals seem within normal range. If you provide more details, I can give deeper analysis.';
    }

    // Add bot response after a short delay to simulate thinking
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', content: botResponse }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-700 dark:to-teal-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">ZeamBot - AI Health Insights</h1>
          <p className="text-lg mt-3 max-w-3xl mx-auto">
            Interact with our AI chatbot to get real-time insights on patient health parameters.
          </p>
        </div>

        {/* Chat Window */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-[60vh] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md p-4 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  {msg.role === 'bot' && (
                    <span className="inline-block mr-2 text-blue-500">
                      <FaRobot aria-hidden="true" />
                    </span>
                  )}
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="mt-4 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Enter patient health parameters or ask a question..."
              className="flex-1 p-3 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Chat input"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-200"
              aria-label="Send message"
            >
              <FaPaperPlane aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeamBot;