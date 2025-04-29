import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
      y: -20,
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
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg' : 'bg-black/30 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 py-4">
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
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {isMenuOpen ? 
              <X className={`w-6 h-6 ${isScrolled ? 'text-emerald-900' : 'text-white'}`} /> : 
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-emerald-900' : 'text-white'}`} />
            }
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              <motion.div className="flex flex-col space-y-4">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/facilities', label: 'Facilities' },
                  { path: '/rooms', label: 'Rooms' },
                  { path: '/contact', label: 'Contact Us' }
                ].map((item) => (
                  <motion.div
                    key={item.path}
                    variants={menuItemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className={`text-emerald-900 text-lg hover:text-emerald-600 transition-colors duration-300 ${
                        location.pathname === item.path ? 'font-semibold' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;