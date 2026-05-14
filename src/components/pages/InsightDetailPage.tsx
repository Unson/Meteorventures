import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Insights } from '@/entities';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function InsightDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [insight, setInsight] = useState<Insights | null>(null);
  const [relatedInsights, setRelatedInsights] = useState<Insights[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadInsight();
      loadRelatedInsights();
    }
  }, [id]);

  const loadInsight = async () => {
    try {
      const data = await BaseCrudService.getById<Insights>('insights', id!);
      setInsight(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading insight:', error);
      setIsLoading(false);
    }
  };

  const loadRelatedInsights = async () => {
    try {
      const result = await BaseCrudService.getAll<Insights>('insights', [], { limit: 3 });
      setRelatedInsights(result.items.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error loading related insights:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <a
            href="/insights"
            className="inline-flex items-center gap-2 font-paragraph text-base text-foreground/80 hover:text-accent-c-t-a transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </a>

          <div className="min-h-[600px]">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <LoadingSpinner />
              </div>
            ) : !insight ? (
              <div className="text-center py-20">
                <h2 className="font-heading text-3xl text-foreground mb-4">Insight Not Found</h2>
                <p className="font-paragraph text-base text-foreground/60 mb-8">
                  The insight you're looking for doesn't exist or has been removed.
                </p>
                <a
                  href="/insights"
                  className="inline-block bg-accent-c-t-a text-background font-heading font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
                >
                  View All Insights
                </a>
              </div>
            ) : (
              <article>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto mb-12"
                >
                  <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
                    {insight.title}
                  </h1>
                  <div className="flex items-center gap-6 text-foreground/60 mb-8">
                    {insight.publicationDate && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span className="font-paragraph text-base">
                          {format(new Date(insight.publicationDate), 'MMMM dd, yyyy')}
                        </span>
                      </div>
                    )}
                    {insight.author && (
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        <span className="font-paragraph text-base">{insight.author}</span>
                      </div>
                    )}
                  </div>
                  {insight.excerpt && (
                    <p className="font-paragraph text-xl text-foreground/80 leading-relaxed">
                      {insight.excerpt}
                    </p>
                  )}
                </motion.div>

                {insight.mainImage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                  >
                    <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                      <Image
                        src={insight.mainImage}
                        alt={insight.title || 'Insight image'}
                        width={1200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="prose prose-invert prose-lg max-w-none">
                    <div className="font-paragraph text-base text-foreground/80 leading-relaxed whitespace-pre-wrap">
                      {insight.content}
                    </div>
                  </div>
                </motion.div>

                {relatedInsights.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 pt-20 border-t border-foreground/10"
                  >
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12 text-center">
                      More Insights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {relatedInsights.map((related) => (
                        <article
                          key={related._id}
                          className="bg-secondary/40 border border-foreground/10 rounded-lg overflow-hidden hover:border-accent-c-t-a/50 transition-colors group"
                        >
                          {related.mainImage && (
                            <a href={`/insights/${related._id}`} className="block">
                              <div className="relative h-48 overflow-hidden">
                                <Image
                                  src={related.mainImage}
                                  alt={related.title || 'Related insight'}
                                  width={400}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            </a>
                          )}
                          <div className="p-6">
                            <a href={`/insights/${related._id}`}>
                              <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-accent-c-t-a transition-colors line-clamp-2">
                                {related.title}
                              </h3>
                            </a>
                            {related.excerpt && (
                              <p className="font-paragraph text-sm text-foreground/80 mb-4 line-clamp-2">
                                {related.excerpt}
                              </p>
                            )}
                            <a
                              href={`/insights/${related._id}`}
                              className="inline-flex items-center gap-2 font-paragraph text-sm text-accent-c-t-a hover:gap-3 transition-all"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </article>
                      ))}
                    </div>
                  </motion.div>
                )}
              </article>
            )}
          </div>
        </div>
      </div>

      <section className="w-full bg-gradient-to-b from-primary to-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Want These Strategies Working for You?
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Get a free site audit and see exactly how we can help your business get found online.
            </p>
            <a
              href="/free-audit"
              className="inline-block bg-accent-c-t-a text-background font-heading font-bold text-lg px-10 py-5 rounded-lg hover:opacity-90 transition-opacity"
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
