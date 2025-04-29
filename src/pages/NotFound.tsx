import { Link } from 'react-router-dom';
import { Ship, Waves, Compass } from 'lucide-react';

function NotFound() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex gap-4 mb-8">
            <Waves className="w-16 h-16 text-emerald-600 animate-[wave_3s_ease-in-out_infinite]" />
            <Ship className="w-16 h-16 text-emerald-700" />
            <Compass className="w-16 h-16 text-emerald-800 animate-spin-slow" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-emerald-900 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-emerald-800 mb-6">
            Looks like you've wandered off the resort grounds
          </h2>
          
          <p className="text-gray-600 max-w-lg mb-8">
            Don't worry, our concierge will guide you back to the main area. 
            In the meantime, would you like to explore our luxury facilities or book a stay?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="bg-emerald-700 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition shadow-lg"
            >
              Return to Homepage
            </Link>
            <Link
              to="/contact"
              className="border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-full hover:bg-emerald-50 transition"
            >
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;