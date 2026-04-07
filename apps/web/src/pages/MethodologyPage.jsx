import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Layers3 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  defaultMethodologyDirectionId,
  methodologyContent,
  methodologyDirectionIds
} from '@/content/methodologyContent';
import { useLocale } from '@/i18n/LocaleContext';
import { DEFAULT_LOCALE } from '@/i18n/config';

function MethodologyPage() {
  const { locale } = useLocale();
  const content = methodologyContent[locale] ?? methodologyContent[DEFAULT_LOCALE];
  const [searchParams, setSearchParams] = useSearchParams();
  const currentDirectionId = searchParams.get('direction');
  const selectedDirectionId = methodologyDirectionIds.has(currentDirectionId)
    ? currentDirectionId
    : defaultMethodologyDirectionId;
  const selectedDirection =
    content.directions.find((direction) => direction.id === selectedDirectionId) ??
    content.directions[0];

  useEffect(() => {
    if (selectedDirection && currentDirectionId !== selectedDirection.id) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set('direction', selectedDirection.id);
      setSearchParams(nextParams, { replace: true });
    }
  }, [currentDirectionId, searchParams, selectedDirection, setSearchParams]);

  const handleDirectionSelect = (directionId) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('direction', directionId);
    setSearchParams(nextParams);
  };

  return (
    <>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      <div className="relative min-h-screen flex flex-col">
        <div className="fixed inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background -z-10"></div>
        <Header />

        <main className="flex-1 pt-6 pb-10 md:pt-8 md:pb-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 max-w-5xl">
                <h1
                  className="mb-4 text-4xl font-bold leading-tight md:text-5xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {content.title}
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {content.description}
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
                <div className="lg:sticky lg:top-24">
                  <Card className="border-primary/10">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl">{content.menuTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                        {content.directions.map((direction) => {
                          const isActive = direction.id === selectedDirection.id;

                          return (
                            <button
                              key={direction.id}
                              type="button"
                              onClick={() => handleDirectionSelect(direction.id)}
                              className={cn(
                                'min-w-[240px] rounded-xl border px-4 py-4 text-left transition-all duration-200 lg:min-w-0',
                                isActive
                                  ? 'border-primary bg-primary/10 text-foreground shadow-sm'
                                  : 'border-border bg-background hover:border-primary/40 hover:bg-muted'
                              )}
                              aria-pressed={isActive}
                            >
                              <div className="font-semibold leading-snug">{direction.menuTitle}</div>
                            </button>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <motion.div
                  key={`${locale}-${selectedDirection.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Card className="border-primary/10 shadow-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-3xl leading-tight md:text-4xl">
                        {selectedDirection.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <section className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-primary/10 p-2">
                            <Layers3 className="h-5 w-5 text-primary" />
                          </div>
                          <h2 className="text-xl font-semibold">{content.topicsTitle}</h2>
                        </div>

                        {selectedDirection.topicBlocks ? (
                          <div className="space-y-6">
                            {selectedDirection.topicBlocks.map((block) => (
                              <section key={block.title} className="space-y-3">
                                <h3 className="text-lg font-semibold leading-snug text-foreground">
                                  {block.title}
                                </h3>
                                {block.items?.length ? (
                                  <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground marker:text-primary">
                                    {block.items.map((item) => (
                                      <li key={`${block.title}-${item}`}>{item}</li>
                                    ))}
                                  </ul>
                                ) : null}
                              </section>
                            ))}
                          </div>
                        ) : (
                          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground marker:text-primary">
                            {selectedDirection.topics.map((topic) => (
                              <li key={topic}>{topic}</li>
                            ))}
                          </ul>
                        )}
                      </section>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MethodologyPage;
