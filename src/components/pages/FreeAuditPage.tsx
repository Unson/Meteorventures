import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileSearch, CheckCircle, Mail, Phone as PhoneIcon, Globe, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', website: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const auditIncludes = [
    'Comprehensive SEO analysis of your current rankings',
    'Technical performance review and Core Web Vitals',
    'Mobile responsiveness and user experience audit',
    'Competitor comparison in your market',
    'Prioritized action plan with specific fixes',
    'No obligation, no sales pitch—just actionable insights'
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-background to-background" />
        
        <div className="relative z-10 max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <FileSearch className="w-20 h-20 text-accent-c-t-a mx-auto mb-6" />
            <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">
              Get Your Free Site Audit
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed">
              See exactly what's holding your site back. We'll analyze your SEO, performance, and conversion issues—then show you how to fix them. No fluff, no sales pitch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-background py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-secondary/40 border border-foreground/10 rounded-lg p-8">
                <h2 className="font-heading text-3xl text-foreground mb-6">
                  Request Your Audit
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-accent-c-t-a mx-auto mb-6" />
                    <h3 className="font-heading text-2xl text-foreground mb-4">
                      Request Received!
                    </h3>
                    <p className="font-paragraph text-base text-foreground/80 mb-6">
                      We'll analyze your site and get back to you within 24-48 hours with your free audit report.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-accent-c-t-a text-background hover:opacity-90"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-paragraph text-sm text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-foreground/20 text-foreground"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-paragraph text-sm text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-foreground/20 text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-paragraph text-sm text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-foreground/20 text-foreground"
                        placeholder="(215) 555-1234"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block font-paragraph text-sm text-foreground mb-2">
                        Your Website URL *
                      </label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        required
                        value={formData.website}
                        onChange={handleChange}
                        className="bg-background border-foreground/20 text-foreground"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-paragraph text-sm text-foreground mb-2">
                        Tell Us About Your Business (Optional)
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-background border-foreground/20 text-foreground"
                        placeholder="What does your business do? What are your main goals?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent-c-t-a text-background font-heading font-bold text-lg py-6 hover:opacity-90"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get My Free Audit'}
                    </Button>

                    <p className="font-paragraph text-xs text-foreground/60 text-center">
                      We'll never share your information. No spam, no sales calls—just your audit results.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl text-foreground mb-6">
                  What's Included in Your Audit
                </h2>
                <ul className="space-y-4">
                  {auditIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent-c-t-a flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-base text-foreground/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/40 border border-accent-c-t-a/30 rounded-lg p-8">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Prefer to Talk First?
                </h3>
                <p className="font-paragraph text-base text-foreground/80 mb-6">
                  Book a free 30-minute strategy call to discuss your business and see if we're a good fit.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+12155551234"
                    className="flex items-center gap-3 text-foreground hover:text-accent-c-t-a transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span className="font-paragraph text-base">(215) 555-1234</span>
                  </a>
                  <a
                    href="mailto:shane@meteorventures.com"
                    className="flex items-center gap-3 text-foreground hover:text-accent-c-t-a transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-paragraph text-base">shane@meteorventures.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-secondary/40 border border-foreground/10 rounded-lg p-8">
                <h3 className="font-heading text-xl text-foreground mb-4">
                  Book a Strategy Call
                </h3>
                <p className="font-paragraph text-sm text-foreground/80 mb-4">
                  Use our Calendly to schedule a time that works for you.
                </p>
                <div className="aspect-video bg-background/50 border border-foreground/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 text-accent-c-t-a mx-auto mb-3" />
                    <p className="font-paragraph text-sm text-foreground/60">
                      Calendly embed would go here
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
