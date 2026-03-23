import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(215)-948-2839',
      link: 'tel:+12159482839',
      description: 'Mon-Fri, 9am-6pm EST'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'shane@meteorventures.com',
      link: 'mailto:shane@meteorventures.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Philadelphia, PA',
      description: 'Serving businesses nationwide'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-background to-background" />
        
        <div className="relative z-10 max-w-[120rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">
              Let's Talk About Your Business
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed">
              Ready to get found online? Have questions about our services? Reach out and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full bg-secondary/30 py-20">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary/40 border border-foreground/10 rounded-lg p-8 text-center hover:border-accent-c-t-a/50 transition-colors"
              >
                <info.icon className="w-12 h-12 text-accent-c-t-a mx-auto mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="font-paragraph text-base text-foreground hover:text-accent-c-t-a transition-colors block mb-2"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="font-paragraph text-base text-foreground mb-2">{info.content}</p>
                )}
                <p className="font-paragraph text-sm text-foreground/60">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full bg-background py-20">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-secondary/40 border border-foreground/10 rounded-lg p-8">
                <h2 className="font-heading text-3xl text-foreground mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-accent-c-t-a mx-auto mb-6" />
                    <h3 className="font-heading text-2xl text-foreground mb-4">
                      Message Sent!
                    </h3>
                    <p className="font-paragraph text-base text-foreground/80 mb-6">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-accent-c-t-a text-background hover:opacity-90"
                    >
                      Send Another Message
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
                        placeholder="(215)-948-2839"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block font-paragraph text-sm text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-background border-foreground/20 text-foreground"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-paragraph text-sm text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-background border-foreground/20 text-foreground"
                        placeholder="Tell us about your business and what you're looking for..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent-c-t-a text-background font-heading font-bold text-lg py-6 hover:opacity-90 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl text-foreground mb-6">
                  Why Work With Us?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-c-t-a flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Veteran-Owned</h3>
                      <p className="font-paragraph text-sm text-foreground/80">
                        Military discipline and mission-focused execution in every campaign.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-c-t-a flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Results-Driven</h3>
                      <p className="font-paragraph text-sm text-foreground/80">
                        We measure success by one metric: does it bring in customers?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-c-t-a flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">No BS Approach</h3>
                      <p className="font-paragraph text-sm text-foreground/80">
                        Straight talk, real strategies, and accountability for results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/40 border border-accent-c-t-a/30 rounded-lg p-8">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Prefer a Free Audit First?
                </h3>
                <p className="font-paragraph text-base text-foreground/80 mb-6">
                  Not ready to commit? Start with a free site audit. We'll show you exactly what's holding your business back.
                </p>
                <Link
                  to="/free-audit"
                  className="inline-block bg-accent-c-t-a text-background font-heading font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Your Free Audit
                </Link>
              </div>

              <div className="bg-secondary/40 border border-foreground/10 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 text-accent-c-t-a flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">Business Hours</h3>
                    <div className="space-y-1 font-paragraph text-sm text-foreground/80">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <p className="font-paragraph text-sm text-foreground/60">
                  Emergency support available for existing clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
