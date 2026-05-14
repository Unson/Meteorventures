import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Insights } from '@/entities';
import { Image } from '@/components/ui/image';

export default function TransmissionsPage() {
  const [insights, setInsights] = useState<Insights[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);
  const [nextSkip, setNextSkip] = useState<number | null>(null);

  useEffect(() => {
    loadInsights();
  }, []);

  const loadInsights = async (skip = 0) => {
    try {
      const result = await BaseCrudService.getAll<Insights>('insights', [], { limit: 9, skip });
      
      if (skip === 0) {
        setInsights(result.items);
      } else {
        setInsights(prev => [...prev, ...result.items]);
      }
      
      setHasNext(result.hasNext);
      setNextSkip(result.nextSkip);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (nextSkip !== null) {
      loadInsights(nextSkip);
    }
  };

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
              Signals from the Void
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed">
              Tactical intelligence for navigating the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="w-full bg-background py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <div className="min-h-[600px]">
            {isLoading ? null : insights.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {insights.map((insight, index) => (
                    <motion.article
                      key={insight._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className={`bg-secondary/40 border rounded-lg overflow-hidden transition-colors group ${
                        index % 2 === 0 ? 'border-nebula-cyan/20 hover:border-nebula-cyan/50' : 'border-nebula-magenta/20 hover:border-nebula-magenta/50'
                      }`}
                    >
                      {insight.mainImage && (
                        <a href={`/insights/${insight._id}`} className="block">
                          <div className="relative h-56 overflow-hidden">
                            <Image src={insight.mainImage} alt={insight.title || 'Insight image'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                        </a>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                          {insight.publicationDate && (
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-paragraph">
                                {format(new Date(insight.publicationDate), 'MMM dd, yyyy')}
                              </span>
                            </div>
                          )}
                          {insight.author && (
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span className="font-paragraph">{insight.author}</span>
                            </div>
                          )}
                        </div>

                        <a href={`/insights/${insight._id}`}>
                          <h2 className={`font-heading text-2xl text-foreground mb-3 transition-colors ${
                            index % 2 === 0 ? 'group-hover:text-nebula-cyan' : 'group-hover:text-nebula-magenta'
                          }`}>
                            {insight.title}
                          </h2>
                        </a>

                        {insight.excerpt && (
                          <p className="font-paragraph text-base text-foreground/80 mb-4 line-clamp-3 leading-relaxed">
                            {insight.excerpt}
                          </p>
                        )}

                        <a
                          href={`/insights/${insight._id}`}
                          className={`inline-flex items-center gap-2 font-paragraph text-base hover:gap-3 transition-all ${
                            index % 2 === 0 ? 'text-nebula-cyan' : 'text-nebula-magenta'
                          }`}
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {hasNext && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12"
                  >
                    <button
                      onClick={handleLoadMore}
                      className="bg-nebula-cyan text-background font-heading font-bold text-base px-8 py-4 rounded-lg hover:bg-nebula-magenta transition-colors"
                    >
                      Load More Transmissions
                    </button>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground/60">
                  No transmissions available yet. Check back soon for tactical intelligence on SEO and digital marketing.
                </p>
              </div>
            )}
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
              Ready to Apply These Strategies?
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Get a free site audit and see exactly how we can help your business get found online.
            </p>
            <a
              href="/free-audit"
              className="inline-block bg-nebula-cyan text-background font-heading font-bold text-lg px-10 py-5 rounded-lg hover:bg-nebula-magenta transition-colors"
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
