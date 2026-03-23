import { motion } from 'framer-motion';
import { Shield, Target, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Veteran Discipline',
      description: 'We bring military precision and mission-focused execution to every campaign. No shortcuts, no excuses.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by one metric: does it bring in customers? Everything else is noise.'
    },
    {
      icon: Users,
      title: 'Small Business Focus',
      description: 'We work with businesses that need real results, not corporate giants with unlimited budgets.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Search algorithms change constantly. We stay ahead so your business doesn\'t fall behind.'
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
              Built by a Veteran Who Got Tired of Watching Good Businesses Stay Invisible
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed">
              Meteor Ventures was founded by Shane, a veteran who transitioned from military service to digital marketing and saw a problem: too many solid local businesses were getting crushed online because they didn't understand SEO, wasted money on bad ads, or had websites that barely worked.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shane's Story */}
      <section className="w-full bg-nebula-violet/5 py-20 border-y border-nebula-cyan/10">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                Why We Started This
              </h2>
              <div className="space-y-4 font-paragraph text-base text-foreground/80 leading-relaxed">
                <p>
                  After leaving the military, I worked with several marketing agencies and saw the same pattern: small businesses getting sold expensive packages they didn't need, generic strategies that didn't fit their market, and zero accountability when results didn't show up.
                </p>
                <p>
                  I started Meteor Ventures to do it differently. We focus on what actually moves the needle for small businesses: getting found by customers who are actively searching, fixing technical issues that kill conversions, and running ad campaigns that bring in real leads—not just clicks.
                </p>
                <p>
                  We're not here to sell you a dream. We're here to navigate the unseen forces of search algorithms, fix what's broken, and get your business in front of the people who need what you offer.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary/40 border border-nebula-cyan/30 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-nebula-cyan" />
                <div>
                  <h3 className="font-heading text-2xl text-foreground">Shane</h3>
                  <p className="font-paragraph text-base text-foreground/70">Founder & Lead Strategist</p>
                </div>
              </div>
              <div className="space-y-3 font-paragraph text-base text-foreground/80">
                <p className="flex items-start gap-2">
                  <span className="text-nebula-cyan mt-1">•</span>
                  <span>U.S. Military Veteran</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-nebula-magenta mt-1">•</span>
                  <span>10+ Years Digital Marketing Experience</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-nebula-bright-blue mt-1">•</span>
                  <span>Specialized in Local SEO & Technical Optimization</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-nebula-cyan mt-1">•</span>
                  <span>Based in Philadelphia, PA</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
              Our Approach
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
              We don't do cookie-cutter strategies. Every business is different, and we treat them that way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-secondary/40 border rounded-lg p-8 transition-colors ${
                  index % 2 === 0 ? 'border-nebula-cyan/20 hover:border-nebula-cyan/50' : 'border-nebula-magenta/20 hover:border-nebula-magenta/50'
                }`}
              >
                <value.icon className={`w-12 h-12 mb-6 ${
                  index % 2 === 0 ? 'text-nebula-cyan' : 'text-nebula-magenta'
                }`} />
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                  {value.description}
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
              Let's Get Your Business Found
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Start with a free site audit. We'll show you exactly what's holding you back and how to fix it.
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
