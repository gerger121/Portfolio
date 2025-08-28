import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    setMessages(storedMessages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
  }, []);

  const clearAllMessages = () => {
    if (window.confirm('Are you sure you want to delete all messages? This action cannot be undone.')) {
      localStorage.removeItem('contactMessages');
      setMessages([]);
    }
  };

  const deleteMessage = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const updatedMessages = messages.filter(message => message.id !== id);
      localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
      setMessages(updatedMessages);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Contact Messages
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {messages.length} message{messages.length !== 1 ? 's' : ''} received
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link
              to="/"
              className="btn-secondary"
            >
              ← Back to Portfolio
            </Link>
            {messages.length > 0 && (
              <button
                onClick={clearAllMessages}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No messages yet
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Messages submitted through the contact form will appear here.
            </p>
            <Link to="/#contact" className="btn-primary">
              Go to Contact Form
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {message.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      {message.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(message.timestamp)}
                    </span>
                    <button
                      onClick={() => deleteMessage(message.id)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                      title="Delete message"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {message.message}
                  </p>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <a
                    href={`mailto:${message.email}?subject=Re: Your message&body=Hi ${message.name},%0D%0A%0D%0AThank you for your message!%0D%0A%0D%0A`}
                    className="btn-primary text-sm"
                  >
                    Reply via Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
