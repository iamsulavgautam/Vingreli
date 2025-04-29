import { PhoneCall } from 'lucide-react';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+977-82-563749"
      className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 md:hidden z-50"
      aria-label="Call Us"
    >
      <PhoneCall className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;