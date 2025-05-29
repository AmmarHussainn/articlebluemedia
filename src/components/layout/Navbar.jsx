import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Bot, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
    },
    { 
      name: 'Services', 
      path: '/services', 
      dropdown: [
        { name: 'Inbound AI Agents', path: '/services#inbound' },
        { name: 'Outbound AI Agents', path: '/services#outbound' },
        { name: 'AI Integration', path: '/services#integration' },
      ]
    },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold"
            onClick={closeMenu}
          >
            <Bot
              className={`w-8 h-8 ${
                isScrolled ? 'text-primary-600' : 'text-primary-500'
              }`}
            />
            <span
              className={`${
                isScrolled ? 'text-neutral-900' : 'text-white'
              }`}
            >
              Nexus<span className="text-primary-500">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button 
                    className={`flex items-center gap-1 text-base font-medium transition-colors duration-200 hover:text-primary-500 ${
                      isScrolled ? 'text-neutral-800' : 'text-white'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-base font-medium transition-colors duration-200 hover:text-primary-500 ${
                        isActive
                          ? 'text-primary-600'
                          : isScrolled
                          ? 'text-neutral-800'
                          : 'text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
                
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:transform-none">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-neutral-800 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <a
              href="tel:+18001234567"
              className="btn btn-gradient flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Get Demo</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <div key={item.name} className="py-2">
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-lg font-medium py-2 text-neutral-800 hover:text-primary-500 transition-colors duration-200"
                        onClick={() => toggleDropdown(index)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-1 border-l-2 border-primary-100"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="block py-2 text-base text-neutral-600 hover:text-primary-500"
                                onClick={closeMenu}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block text-lg font-medium py-2 transition-colors duration-200 ${
                          isActive
                            ? 'text-primary-600'
                            : 'text-neutral-800 hover:text-primary-500'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
              
              <a
                href="tel:+18001234567"
                className="btn btn-gradient flex items-center justify-center gap-2 mt-6"
                onClick={closeMenu}
              >
                <Phone className="w-4 h-4" />
                <span>Get Demo</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};