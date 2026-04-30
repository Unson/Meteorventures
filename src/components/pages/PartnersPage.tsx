import { motion } from 'framer-motion';
import { ExternalLink, Shield, Award, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PartnersPage() {
  const partners = [
    {
      name: 'Google',
      category: 'Search & Advertising',
      description: 'Certified Google Partner for SEO and Google Ads management.',
      icon: '🔍',
      url: 'https://google.com'
    },
    {
      name: 'HubSpot',
      category: 'Marketing Automation',
      description: 'Integrated CRM and marketing automation for lead management.',
      icon: '📊',
      url: 'https://hubspot.com'
    },
    {
      name: 'Semrush',
      category: 'SEO Tools',
      description: 'Advanced SEO analytics and competitor research platform.',
      icon: '📈',
      url: 'https://semrush.com'
    },
    {
      name: 'Ahrefs',
      category: 'Link Analysis',
      description: 'Comprehensive backlink analysis and SEO auditing tools.',
      icon: '🔗',
      url: 'https://ahrefs.com'
    },
    {
      name: 'Cloudflare',
      category: 'Performance & Security',
      description: 'CDN and security infrastructure for fast, reliable websites.',
      icon: '⚡',
      url: 'https://cloudflare.com'
    },
    {
      name: 'Wix',
      category: 'Website Platform',
      description: 'Modern website building and hosting platform.',
      icon: '🌐',
      url: 'https://wix.com'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Trusted Partnerships',
      description: 'We work with industry-leading platforms and tools to deliver the best results for your business.'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Our team maintains certifications and partnerships with major platforms to stay ahead of the curve.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We integrate seamlessly with your existing tools and workflows for maximum efficiency.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-magenta/10 via-background to-background" />
        
        <div className="relative z-10 max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">
              Our Partners
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed">
              We partner with industry-leading platforms and tools to deliver exceptional results. Our integrations ensure you get the best technology and expertise working together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-secondary/30 py-20 border-y border-cosmic-teal/10">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background/40 border border-cosmic-teal/20 rounded-lg p-8 hover:border-cosmic-teal/50 transition-colors"
              >
                <benefit.icon className="w-12 h-12 text-cosmic-teal mb-6" />
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="w-full bg-background py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
              The tools and platforms we trust to deliver results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-secondary/40 border border-cosmic-magenta/20 rounded-lg p-8 hover:border-cosmic-teal/50 transition-all hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{partner.icon}</div>
                  <ExternalLink className="w-5 h-5 text-cosmic-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-2 group-hover:text-cosmic-teal transition-colors">
                  {partner.name}
                </h3>
                <p className="font-heading text-sm text-cosmic-magenta mb-4 uppercase tracking-wider">
                  {partner.category}
                </p>
                <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                  {partner.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-cosmic-purple/10 to-cosmic-magenta/5 py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Ready to Leverage Our Partnerships?
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Let's discuss how our integrated approach can accelerate your business growth.
            </p>
            <a
              href="/free-audit"
              className="inline-block bg-cosmic-teal text-background font-heading font-bold text-lg px-10 py-5 rounded-lg hover:bg-cosmic-magenta transition-colors"
            >
              Get Your Free Audit
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
