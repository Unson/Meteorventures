import { Phone, Mail, MapPin, Shield, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/insights', label: 'Insights' },
    { path: '/partners', label: 'Partners' },
    { path: '/free-audit', label: 'Free Audit' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="w-full bg-primary border-t border-foreground/10">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cosmic-teal rounded-full flex items-center justify-center">
                <span className="font-heading text-background text-xl font-bold">M</span>
              </div>
              <span className="font-heading text-xl text-foreground">
                Meteor Ventures
              </span>
            </div>
            <p className="font-paragraph text-base text-foreground/80 mb-6 leading-relaxed">
              Veteran-owned SEO and digital marketing agency helping small businesses get found online.
            </p>
            <div className="flex items-center gap-3 bg-secondary/40 border border-cosmic-teal/30 rounded-lg px-4 py-3">
              <Shield className="w-6 h-6 text-cosmic-teal flex-shrink-0" />
              <span className="font-paragraph text-sm text-foreground font-bold">
                Veteran-Owned & Operated
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-foreground mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-paragraph text-base text-foreground/80 hover:text-cosmic-teal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl text-foreground mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              <li className="font-paragraph text-base text-foreground/80">SEO Strategy & Optimization</li>
              <li className="font-paragraph text-base text-foreground/80">Technical Website Fixes</li>
              <li className="font-paragraph text-base text-foreground/80">Targeted Ad Campaigns</li>
              <li className="font-paragraph text-base text-foreground/80">Free Site Audits</li>
              <li className="font-paragraph text-base text-foreground/80">Ongoing Retainers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl text-foreground mb-6">Get In Touch</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+12159482839"
                className="flex items-start gap-3 text-foreground/80 hover:text-cosmic-teal transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-paragraph text-base">(215)-948-2839</span>
              </a>
              <a
                href="mailto:shane@meteorventures.com"
                className="flex items-start gap-3 text-foreground/80 hover:text-cosmic-teal transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-paragraph text-base">shane@meteorventures.com</span>
              </a>
              <div className="flex items-start gap-3 text-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-base">Philadelphia, PA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/40 border border-foreground/10 rounded-lg flex items-center justify-center text-foreground hover:text-cosmic-teal hover:border-cosmic-teal/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/40 border border-foreground/10 rounded-lg flex items-center justify-center text-foreground hover:text-cosmic-teal hover:border-cosmic-teal/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <p className="font-paragraph text-sm text-foreground/60 text-center md:text-left">
              © {currentYear} Meteor Ventures LLC. All rights reserved.
            </p>
            <p className="font-paragraph text-sm text-foreground/60 text-center md:text-right">
              Navigating the unseen forces of search algorithms since 2024.
            </p>
          </div>

          {/* Simple Footer Links Section */}
          <div className="pt-8 border-t border-foreground/10">
            <nav className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/" className="font-paragraph text-sm text-foreground/70 hover:text-cosmic-teal transition-colors">Home</Link>
              <span className="text-foreground/30">•</span>
              <Link to="/services" className="font-paragraph text-sm text-foreground/70 hover:text-cosmic-teal transition-colors">Services</Link>
              <span className="text-foreground/30">•</span>
              <Link to="/about" className="font-paragraph text-sm text-foreground/70 hover:text-cosmic-teal transition-colors">About</Link>
              <span className="text-foreground/30">•</span>
              <Link to="/insights" className="font-paragraph text-sm text-foreground/70 hover:text-cosmic-teal transition-colors">Insights</Link>
              <span className="text-foreground/30">•</span>
              <Link to="/partners" className="font-paragraph text-sm text-foreground/70 hover:text-cosmic-teal transition-colors">Partners</Link>
              <span className="text-foreground/30">•</span>
              <Link to="/free-audit" className="font-paragraph text-sm text-foreground/70 hover:text-cosmic-teal transition-colors">Book Consultation</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
