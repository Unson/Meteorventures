import { motion } from 'framer-motion';
import { Search, Zap, Target, FileSearch, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: 'SEO Strategy & Optimization',
      description: 'Get found by customers actively searching for what you offer. We optimize your site for the keywords that actually bring in business, not vanity metrics.',
      features: [
        'Local SEO for Philadelphia and beyond',
        'Keyword research focused on buyer intent',
        'On-page optimization that ranks',
        'Content strategy that converts',
        'Competitor analysis and gap identification'
      ]
    },
    {
      icon: Zap,
      title: 'Technical Website Fixes & Performance',
      description: 'Slow sites lose customers and tank your rankings. We fix the technical issues that kill conversions and make Google ignore you.',
      features: [
        'Site speed optimization',
        'Mobile responsiveness fixes',
        'Core Web Vitals improvement',
        'Broken link repair and redirects',
        'Schema markup and structured data'
      ]
    },
    {
      icon: Target,
      title: 'Targeted Ad Campaigns',
      description: 'Stop wasting money on ads that don\'t convert. We run Google Ads, Facebook Ads, and other campaigns that bring in real leads.',
      features: [
        'Google Ads management',
        'Facebook & Instagram advertising',
        'Landing page optimization',
        'A/B testing and conversion tracking',
        'Budget optimization for maximum ROI'
      ]
    },
    {
      icon: FileSearch,
      title: 'Free Site Audits',
      description: 'See exactly what\'s holding your site back. We provide actionable insights on SEO, performance, and conversion issues—no fluff.',
      features: [
        'Comprehensive SEO analysis',
        'Technical performance review',
        'Competitor comparison',
        'Prioritized action plan',
        'No obligation, no sales pitch'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Ongoing Retainers & Support',
      description: 'Search algorithms change constantly. We stay on top of updates, monitor your rankings, and adjust strategy so you don\'t fall behind.',
      features: [
        'Monthly SEO maintenance',
        'Content updates and optimization',
        'Performance monitoring and reporting',
        'Algorithm update response',
        'Dedicated support and strategy calls'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nebula-purple/20 via-background to-background" />
        
        <div className="relative z-10 max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">
              Services That Actually Bring In Customers
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed">
              We help small businesses get noticed online and actually make money from their traffic. No complicated jargon—just real solutions that work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full bg-background py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`bg-secondary/40 border rounded-lg p-8 transition-colors ${
                    index % 2 === 0 ? 'border-nebula-cyan/20 hover:border-nebula-cyan/50' : 'border-nebula-magenta/20 hover:border-nebula-magenta/50'
                  }`}>
                    <service.icon className={`w-16 h-16 mb-6 ${
                      index % 2 === 0 ? 'text-nebula-cyan' : 'text-nebula-magenta'
                    }`} />
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-heading text-xl text-foreground mb-6">What's Included:</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ArrowRight className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          index % 2 === 0 ? 'text-nebula-cyan' : 'text-nebula-magenta'
                        }`} />
                        <span className="font-paragraph text-base text-foreground/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-nebula-violet/5 py-20 border-y border-nebula-cyan/10">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              How We Work
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
              Simple, straightforward process focused on getting results fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Free Audit',
                description: 'We analyze your site, identify what\'s holding you back, and show you exactly what needs to be fixed.',
                color: 'nebula-cyan'
              },
              {
                step: '02',
                title: 'Strategy Call',
                description: 'We walk through the audit, answer your questions, and build a plan that fits your business and budget.',
                color: 'nebula-magenta'
              },
              {
                step: '03',
                title: 'Execute & Optimize',
                description: 'We implement the fixes, launch campaigns, and continuously optimize based on real data and results.',
                color: 'nebula-bright-blue'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-primary/40 border rounded-lg p-8 ${
                  item.color === 'nebula-cyan' ? 'border-nebula-cyan/20 hover:border-nebula-cyan/50' :
                  item.color === 'nebula-magenta' ? 'border-nebula-magenta/20 hover:border-nebula-magenta/50' :
                  'border-nebula-bright-blue/20 hover:border-nebula-bright-blue/50'
                } transition-colors`}
              >
                <div className={`font-heading text-5xl mb-4 ${
                  item.color === 'nebula-cyan' ? 'text-nebula-cyan' :
                  item.color === 'nebula-magenta' ? 'text-nebula-magenta' :
                  'text-nebula-bright-blue'
                }`}>{item.step}</div>
                <h3 className="font-heading text-2xl text-foreground mb-4">{item.title}</h3>
                <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-nebula-purple/10 to-nebula-violet/5 py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Let's see what's holding your business back. Get a free site audit with actionable insights you can use right away.
            </p>
            <Link
              to="/free-audit"
              className="inline-block bg-nebula-cyan text-background font-heading font-bold text-lg px-10 py-5 rounded-lg hover:bg-nebula-magenta transition-colors"
            >
              Get Your Free Audit
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
