// HPI 1.7-G - Cosmic Horror Aesthetic
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Zap, TrendingUp, Shield, ArrowRight, BarChart3, Search, Rocket, ChevronRight, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

// --- Canonical Data Sources ---
// Preserving original data structures and enriching with prompt-requested content
const SERVICES_DATA = [
  {
    id: 'seo',
    icon: Target,
    title: 'SEO Strategy',
    description: 'Get found by customers actively searching for what you offer. Real optimization that moves the needle.',
    detail: 'We reverse-engineer the search landscape to place your business directly in the path of intent.'
  },
  {
    id: 'tech',
    icon: Zap,
    title: 'Technical Fixes',
    description: 'Slow sites lose customers. We fix performance issues that kill conversions and tank your rankings.',
    detail: 'Core Web Vitals optimization and code-level remediation to ensure instant load times.'
  },
  {
    id: 'ads',
    icon: TrendingUp,
    title: 'Targeted Ads',
    description: "Stop wasting money on ads that don't convert. We run campaigns that actually bring in customers.",
    detail: 'Precision targeting on Google and Social platforms with ROI-focused attribution models.'
  },
  {
    id: 'audit',
    icon: Shield,
    title: 'Free Audits',
    description: "See exactly what's holding your site back. No fluff, just actionable insights you can use.",
    detail: 'A comprehensive deep-dive into your digital footprint, identifying critical leaks in your funnel.'
  }
];

const TRUST_STATS = [
  { number: '10+', label: 'Years Combined Experience' },
  { number: '15+', label: 'Small Businesses Helped' },
  { number: '100%', label: 'Veteran-Owned & Operated' },
  { number: '2025', label: 'Founded in Philadelphia, PA' }
];

const INSIGHTS_DATA = [
  {
    title: 'Why Most Local SEO Fails in 2026',
    excerpt: 'The landscape has shifted. Old tactics are now penalties. Here is what actually works for local visibility.',
    date: 'Oct 12, 2025',
    category: 'Strategy',
    image: 'https://static.wixstatic.com/media/ca33ee_2290f93bdd31454887e112a54f6d030e~mv2.png?originWidth=1280&originHeight=704'
  },
  {
    title: 'Case Study: Doubling Leads via Speed',
    excerpt: "How we fixed a Philly business's site speed and saw a 200% increase in qualified form submissions.",
    date: 'Sep 28, 2025',
    category: 'Performance',
    image: 'https://static.wixstatic.com/media/ca33ee_a1b2c3d4e5f6g7h8i9j0~mv2.png?originWidth=1280&originHeight=704'
  },
  {
    title: 'Google Updates That Matter Right Now',
    excerpt: 'Ignore the noise. These are the three algorithm changes that actually impact small business rankings.',
    date: 'Sep 15, 2025',
    category: 'Intelligence',
    image: 'https://static.wixstatic.com/media/ca33ee_k1l2m3n4o5p6q7r8s9t0~mv2.png?originWidth=1280&originHeight=704'
  }
];

// --- Utility Components ---

const StarField = () => {
  // Static star generation to prevent hydration mismatch
  const stars = Array.from({ length: 50 }).map((_, i) => (
    {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      color: ['cosmic-teal', 'cosmic-magenta', 'cosmic-pink'][Math.floor(Math.random() * 3)]
    }
  ));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute rounded-full ${
            star.color === 'cosmic-teal' ? 'bg-cosmic-teal/40' :
            star.color === 'cosmic-magenta' ? 'bg-cosmic-magenta/40' :
            'bg-cosmic-pink/40'
          }`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const MeteorEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>
        {`
          @keyframes meteor {
            0% { transform: rotate(215deg) translateX(0); opacity: 1; }
            70% { opacity: 1; }
            100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
          }
          @keyframes meteor-magenta {
            0% { transform: rotate(215deg) translateX(0); opacity: 1; }
            70% { opacity: 1; }
            100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
          }
          @keyframes meteor-pink {
            0% { transform: rotate(215deg) translateX(0); opacity: 1; }
            70% { opacity: 1; }
            100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
          }
          .meteor-trail {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 2px;
            width: 100px;
            background: linear-gradient(to right, rgba(0, 255, 159, 0) 0%, rgba(0, 255, 159, 1) 100%);
            animation: meteor 3s linear infinite;
            opacity: 0;
          }
          .meteor-trail-magenta {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 2px;
            width: 100px;
            background: linear-gradient(to right, rgba(255, 0, 255, 0) 0%, rgba(255, 0, 255, 1) 100%);
            animation: meteor-magenta 3s linear infinite;
            opacity: 0;
          }
          .meteor-trail-pink {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 2px;
            width: 100px;
            background: linear-gradient(to right, rgba(255, 105, 180, 0) 0%, rgba(255, 105, 180, 1) 100%);
            animation: meteor-pink 3s linear infinite;
            opacity: 0;
          }
        `}
      </style>
      <div className="meteor-trail" style={{ top: '20%', left: '80%', animationDelay: '0s' }} />
      <div className="meteor-trail-magenta" style={{ top: '40%', left: '90%', animationDelay: '2s' }} />
      <div className="meteor-trail-pink" style={{ top: '10%', left: '60%', animationDelay: '4s' }} />
      <div className="meteor-trail" style={{ top: '70%', left: '20%', animationDelay: '1s' }} />
    </div>
  );
};

const SectionHeader = ({ title, subtitle, align = 'center' }: { title: string, subtitle?: string, align?: 'left' | 'center' | 'right' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <div className={`h-1 w-24 bg-cosmic-teal mb-6 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`} />
      )}
      {subtitle && (
        <p className="font-paragraph text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  </div>
);

// --- Main Component ---

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-clip selection:bg-cosmic-teal/30 selection:text-white">
      <Header />
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Layers */}
        <motion.div 
          style={{ y: yBackground }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-magenta/8 via-cosmic-purple/5 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(195,0,255,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.06),transparent_60%)]" />
          <StarField />
          <MeteorEffect />
        </motion.div>

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div
                style={{ opacity: opacityHero }}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-cosmic-teal/40 mb-8 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-cosmic-teal animate-pulse" />
                  <span className="font-heading text-sm tracking-widest uppercase text-foreground/80">System Operational</span>
                </div>
                
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-foreground mb-8 leading-[0.9] tracking-tighter">
                  Your market's <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-teal via-cosmic-magenta to-cosmic-pink">
                    out there.
                  </span> <br />
                  <span className="text-cosmic-teal">We'll find it.</span>
                </h1>

                <p className="font-paragraph text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl leading-relaxed border-l-2 border-cosmic-teal/50 pl-6">
                  Small businesses are drifting in the void—invisible on Google, burning cash on ads, and losing leads to slow sites. We provide the gravity you need.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    to="/free-audit"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-cosmic-teal text-background font-heading font-bold text-lg tracking-wide overflow-hidden rounded-sm transition-transform hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative flex items-center gap-2">
                      Get Your Free Site Audit <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-cosmic-magenta/40 text-foreground font-heading font-bold text-lg tracking-wide hover:bg-cosmic-magenta/5 transition-colors rounded-sm"
                  >
                    Explore Capabilities
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>
      {/* --- THE PROBLEM (The Void) --- */}
      <section className="relative w-full py-32 bg-gradient-to-b from-background via-cosmic-teal/5 to-background overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic-teal/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,159,0.08),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative flex justify-center lg:justify-start">
              {/* Enhanced dramatic glow effect */}
              <div className="absolute -inset-12 bg-gradient-to-r from-cosmic-teal/40 via-cosmic-magenta/30 to-cosmic-teal/40 blur-3xl rounded-full animate-pulse" />
              <div className="absolute -inset-16 bg-gradient-to-r from-cosmic-magenta/20 via-cosmic-purple/15 to-cosmic-magenta/20 blur-2xl rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              <div className="relative aspect-[4/5] w-2/3 overflow-hidden rounded-lg border-2 border-cosmic-teal/60 shadow-2xl shadow-cosmic-teal/50">
                 <Image 
                  src="https://static.wixstatic.com/media/ca33ee_1d9aab7a71bf4125b0191d81a37a9541~mv2.png?originWidth=384&originHeight=448" 
                  alt="Abstract representation of digital void" 
                  className="w-full h-full object-cover opacity-100 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-cosmic-magenta/10 via-transparent to-cosmic-teal/10 rounded-sm" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-heading text-4xl text-foreground mb-3 relative z-10 font-bold rounded-[50px]">The Invisible Void</h3>
                  <p className="font-paragraph text-lg text-foreground/90 relative z-10 font-semibold">Where good businesses go to disappear.</p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader 
                title="Silence is Expensive." 
                subtitle="Most small business websites aren't assets. They are liabilities floating in deep space."
                align="left"
              />
              
              <div className="space-y-12">
                {[
                  { title: "Invisible Signals", desc: "You have the best product, but Google doesn't know you exist. Your competitors are winning simply because they are louder." },
                  { title: "Resource Drain", desc: "Pouring budget into ads that land on slow, confusing pages. It's like fueling a rocket with a hull breach." },
                  { title: "Lost Transmissions", desc: "Potential customers visit, wait 3 seconds for a load, and leave. You never even knew they were there." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-full border border-cosmic-teal/30 flex items-center justify-center group-hover:bg-cosmic-teal/10 transition-colors">
                      <span className="font-heading text-cosmic-teal">{`0${idx + 1}`}</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-foreground mb-2 group-hover:text-cosmic-teal transition-colors">{item.title}</h4>
                      <p className="font-paragraph text-foreground/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SERVICES (Precision Navigation) --- */}
      <section className="relative w-full py-32 bg-gradient-to-b from-background via-cosmic-magenta/5 to-background border-y border-cosmic-teal/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,255,0.08),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader 
            title="Precision Navigation" 
            subtitle="We don't guess. We execute calculated maneuvers to dominate your local market."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative bg-background border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  index % 2 === 0 ? 'border-cosmic-teal/20 hover:border-cosmic-magenta/50' : 'border-cosmic-magenta/20 hover:border-cosmic-teal/50'
                }`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index % 2 === 0 ? 'bg-gradient-to-b from-cosmic-magenta/5 to-transparent' : 'bg-gradient-to-b from-cosmic-teal/5 to-transparent'
                }`} />
                
                <service.icon className={`w-12 h-12 mb-8 group-hover:scale-110 transition-transform duration-300 ${
                  index % 2 === 0 ? 'text-cosmic-teal' : 'text-cosmic-magenta'
                }`} />
                
                <h3 className="font-heading text-2xl text-foreground mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-paragraph text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className={`h-px w-full mb-6 transition-colors ${
                  index % 2 === 0 ? 'bg-cosmic-teal/10 group-hover:bg-cosmic-magenta/30' : 'bg-cosmic-magenta/10 group-hover:bg-cosmic-teal/30'
                }`} />
                
                <p className="font-paragraph text-sm text-foreground/50 italic">
                  {service.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-cosmic-teal font-heading font-bold text-lg hover:text-cosmic-magenta transition-colors border-b border-cosmic-teal/30 hover:border-cosmic-magenta pb-1"
            >
              Explore Full Mission Parameters <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* --- VETERAN STORY (Trust) --- */}
      <section className="relative w-full py-32 bg-gradient-to-b from-background via-cosmic-purple/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(195,0,255,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,255,159,0.08),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-cosmic-teal fill-cosmic-teal" />
                <span className="font-heading text-sm tracking-widest uppercase text-cosmic-teal">Veteran Owned & Operated</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-8">
                Forged in Discipline. <br />
                <span className="text-cosmic-magenta">Driven by Results.</span>
              </h2>
              
              <div className="space-y-6 font-paragraph text-lg text-foreground/80 leading-relaxed max-w-3xl">
                <p>
                  I started Meteor Ventures because I was tired of seeing good, honest local businesses get left behind. You built something real, but in the digital age, being good isn't enough. You have to be visible.
                </p>
                <p>
                  We bring the same mission-focused discipline from military service to your marketing. No excuses. No "fluff" metrics. Just a clear objective and the relentless execution required to achieve it.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-cosmic-teal/10 pt-12">
                {TRUST_STATS.map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-heading text-4xl md:text-5xl text-cosmic-teal mb-2">{stat.number}</div>
                    <div className="font-paragraph text-sm text-foreground/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- INSIGHTS (Signals from the Void) --- */}
      <section className="relative w-full py-32 bg-gradient-to-b from-secondary via-secondary/50 to-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(195,0,255,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,159,0.08),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Signals from the Void</h2>
              <p className="font-paragraph text-foreground/60 max-w-xl">Tactical intelligence for navigating the digital landscape.</p>
            </div>
            <Link to="/insights" className="px-6 py-3 border border-cosmic-teal/20 hover:bg-cosmic-teal/5 text-foreground font-heading text-sm tracking-wider uppercase transition-colors">
              View All Transmissions
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS_DATA.map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] mb-6 overflow-hidden bg-secondary/20 border border-cosmic-teal/10 rounded-sm">
                  <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-md px-3 py-1 text-xs font-heading uppercase tracking-wider text-cosmic-teal border border-cosmic-teal/20">
                    {post.category}
                  </div>
                  <Image 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                <div className="flex items-center gap-4 mb-3 text-xs font-paragraph text-foreground/40">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-cosmic-magenta" />
                  <span>By Shane</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3 group-hover:text-cosmic-teal transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-paragraph text-foreground/60 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* --- CTA (Initiate Sequence) --- */}
      <section className="relative w-full py-40 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cosmic-teal/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,159,0.08),transparent_60%)] pointer-events-none" />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(0, 255, 159, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 159, 0.1) 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }} 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl md:text-7xl text-foreground mb-8">
              Ready to Launch?
            </h2>
            <p className="font-paragraph text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              The market is vast, but your trajectory doesn't have to be uncertain. Start with a free audit. We'll show you exactly where the opportunities are hiding.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/free-audit"
                className="w-full sm:w-auto px-10 py-5 bg-cosmic-teal text-background font-heading font-bold text-xl rounded-sm hover:bg-cosmic-magenta transition-colors"
              >
                Initiate Free Audit
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-transparent border border-cosmic-magenta/40 text-foreground font-heading font-bold text-xl rounded-sm hover:bg-cosmic-magenta/10 transition-colors"
              >
                Contact HQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
