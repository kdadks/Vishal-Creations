import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '917503131359'; // WhatsApp number in international format without '+'
  const message = encodeURIComponent('Hello, I would like to inquire about your products.');
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M16.8 14.4c-.3-.1-1.7-.8-1.9-.9s-.4-.1-.5.1-.6.9-.7 1.1-.3.1-.6 0c-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.5-1.8-1.7-2.1s0-.5.1-.6c.1-.1.3-.3.4-.5.1-.1.1-.3 0-.5s-.5-1.3-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.8.3s-1 .9-1 2.1 1 2.4 1.1 2.6 1.9 3 4.7 4.2c.7.3 1.2.5 1.6.7.7.3 1.3.2 1.8.1s1.7-.7 1.9-1.3.2-1.2.2-1.3c0-.2-.3-.3-.6-.4z" />
        <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.6 4 1.6 5.7L2 22l4.3-1.4C8 21.4 10 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.8 0-3.5-.5-4.9-1.4l-.3-.2-2.5.8.8-2.4-.2-.3C4.5 15.5 4 13.8 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
      </svg>
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
};
