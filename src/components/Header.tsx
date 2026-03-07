import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/transmissions', label: 'Transmissions' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[120rem] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-cosmic-teal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="font-heading text-background text-xl font-bold">M</span>
            </div>
            <span className="font-heading text-xl md:text-2xl text-foreground">
              Meteor Ventures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-base transition-colors ${
                  location.pathname === link.path
                    ? 'text-cosmic-teal'
                    : 'text-foreground hover:text-cosmic-teal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12159482839"
              className="flex items-center gap-2 text-foreground hover:text-cosmic-teal transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-paragraph text-base">(215)-948-2839</span>
            </a>
            <Link
              to="/free-audit"
              className="bg-cosmic-teal text-background font-heading font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/95 backdrop-blur-sm border-t border-foreground/10"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-paragraph text-lg py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-cosmic-teal'
                      : 'text-foreground hover:text-cosmic-teal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+12159482839"
                className="flex items-center gap-2 text-foreground hover:text-cosmic-teal transition-colors py-2"
              >
                <Phone className="w-5 h-5" />
                <span className="font-paragraph text-lg">(215)-948-2839</span>
              </a>
              <Link
                to="/free-audit"
                className="bg-cosmic-teal text-background font-heading font-bold text-base px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-center mt-2"
              >
                Get Your Free Audit
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
