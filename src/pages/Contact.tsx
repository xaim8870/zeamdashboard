import React from 'react';
import { useState, useContext } from 'react';
import { Send, MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

// Import your ThemeContext (assuming it's exported from App.tsx)
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: 'support',
      time: '10:30 AM'
    },
    {
      id: 2,
      text: "I have a question about your services.",
      sender: 'user',
      time: '10:32 AM'
    },
    {
      id: 3,
      text: "I'd be happy to help! What specific information are you looking for?",
      sender: 'support',
      time: '10:33 AM'
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! We'll get back to you shortly.",
          sender: 'support',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, supportResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`min-h-screen pt-20 pb-16 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      {/* Header Section */}
      <div className="text-center mb-8 px-4">
        <div className="flex justify-center mb-4">
          <div className={`p-3 rounded-full ${
            theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'
          } shadow-lg`}>
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`}>
          Get in Touch
        </h1>
        <p className={`text-lg max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          We're here to help! Start a conversation or reach out through any of our contact methods.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Quick Contact Cards */}
            {[
              { icon: Phone, title: 'Phone', info: '+1 (555) 123-4567', subinfo: 'Mon-Fri 9AM-6PM' },
              { icon: Mail, title: 'Email', info: 'support@company.com', subinfo: '24/7 Support' },
              { icon: MapPin, title: 'Address', info: '123 Business Ave', subinfo: 'Suite 100, City, State' },
              { icon: Clock, title: 'Hours', info: 'Mon-Fri: 9AM-6PM', subinfo: 'Weekend: 10AM-4PM' }
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-100'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-blue-600' : 'bg-blue-100'
                  }`}>
                    <item.icon className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {item.info}
                    </p>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {item.subinfo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className={`h-[600px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              
              {/* Chat Header */}
              <div className={`p-4 border-b flex items-center space-x-3 ${
                theme === 'dark' 
                  ? 'bg-gray-750 border-gray-600' 
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 border-gray-200'
              }`}>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-white'
                  }`}>
                    Live Support
                  </h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-blue-100'
                    }`}>
                      Online now
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-auto h-[450px] space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                        msg.sender === 'user'
                          ? theme === 'dark'
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-500 text-white'
                          : theme === 'dark'
                            ? 'bg-gray-700 text-gray-100'
                            : 'bg-gray-100 text-gray-800'
                      } ${msg.sender === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p className={`text-xs mt-1 opacity-70`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className={`p-4 border-t ${
                theme === 'dark' 
                  ? 'bg-gray-750 border-gray-600' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-end space-x-3">
                  <div className="flex-1">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      rows="1"
                      className={`w-full px-4 py-3 rounded-xl resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        theme === 'dark'
                          ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-500'
                      }`}
                      style={{ maxHeight: '120px' }}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className={`p-3 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                      theme === 'dark'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;