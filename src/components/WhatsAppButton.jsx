import React from 'react';
import './whatsapp.css'
const WhatsAppButton = () => {
  const phoneNumber = "919344221217"; // Replace with actual number
  const message = "Hi KraToz, I saw your portfolio and I'm interested in your services.";
  const encodedMessage = encodeURIComponent(message);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-8 z-50 animate-bounce-short">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 group relative"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-12 -left-12 bg-white text-[#128C7E] text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with me!
        </span>
        <img src='https://selvarajdhanush108-ai.github.io/Test/whatsapp-.png' alt='Whatsapp' className='img' />
      </button>
    </div>
  );
};

export default WhatsAppButton;
