import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg' : 'bg-black/30 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-4">
        {/* Logo and brand section */}
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleLinkClick} className="flex items-center">
            <motion.img 
              src="/logo.svg" 
              alt="Vingreli Village Resort" 
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <div className="ml-3">
              <h1 className={`text-xl font-serif ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
                Vingreli Village Resort<br />
                <span className="text-sm font-light"></span>
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[ 
              { path: '/', label: 'Home' },
              { path: '/facilities', label: 'Services' },
              { path: '/rooms', label: 'Rooms' },
              { path: '/contact', label: 'Contact Us' }
            ].map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`${
                    isScrolled ? 'text-emerald-900' : 'text-white'
                  } hover:text-emerald-600 transition-colors duration-300 ${
                    location.pathname === item.path ? 'font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? 
              <X className={`w-6 h-6 ${isScrolled ? 'text-emerald-900' : 'text-white'}`} /> : 
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-emerald-900' : 'text-white'}`} />
            }
          </motion.button>
        </div>

        {/* Mobile Menu with Backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                onClick={() => setIsMenuOpen(false)}
                style={{ zIndex: 40 }}
              />
              
              {/* Menu Content */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="absolute top-full left-0 right-0 md:hidden bg-white shadow-xl rounded-b-2xl overflow-hidden"
                style={{ zIndex: 41 }}
              >
                <motion.div className="p-6 space-y-6">
                  {/* Navigation Links */}
                  <motion.div className="space-y-4">
                    {[
                      { path: '/', label: 'Home', icon: '🏠' },
                      { path: '/facilities', label: 'Facilities', icon: '🏨' },
                      { path: '/rooms', label: 'Rooms', icon: '🛏️' },
                      { path: '/contact', label: 'Contact Us', icon: '📞' }
                    ].map((item) => (
                      <motion.div
                        key={item.path}
                        variants={menuItemVariants}
                      >
                        <Link
                          to={item.path}
                          onClick={handleLinkClick}
                          className={`flex items-center space-x-3 p-3 rounded-xl transition-colors ${
                            location.pathname === item.path 
                              ? 'bg-emerald-50 text-emerald-700 font-medium' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quick Contact */}
                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href="tel:+977-82-563749"
                      className="flex items-center justify-center gap-2 bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 transition-colors"
                    >
                      <PhoneCall className="w-5 h-5" />
                      <span>Call Us Now</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;