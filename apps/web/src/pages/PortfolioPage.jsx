import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  defaultPortfolioCaseId,
  defaultPortfolioSectorId,
  portfolioCaseIds,
  portfolioCases,
  portfolioPageContent,
  portfolioSectorIds
} from '@/data/portfolioCases.js';
import { useLocale } from '@/i18n/LocaleContext';
import { DEFAULT_LOCALE } from '@/i18n/config';

function PortfolioPage() {
  const { locale } = useLocale();
  const content = portfolioPageContent[locale] ?? portfolioPageContent[DEFAULT_LOCALE];
  const localizedCases = portfolioCases[locale] ?? portfolioCases[DEFAULT_LOCALE];
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCaseId = searchParams.get('case');
  const currentSectorId = searchParams.get('sector');
  const selectedSectorId = portfolioSectorIds.has(currentSectorId)
    ? currentSectorId
    : defaultPortfolioSectorId;
  const filteredCases = localizedCases.filter(
    (portfolioCase) =>
      selectedSectorId === defaultPortfolioSectorId ||
      portfolioCase.sectors?.includes(selectedSectorId)
  );
  const selectedCaseId = portfolioCaseIds.has(currentCaseId) ? currentCaseId : defaultPortfolioCaseId;
  const selectedCase =
    filteredCases.find((portfolioCase) => portfolioCase.id === selectedCaseId) ??
    filteredCases[0] ??
    localizedCases[0];
  const activeCaseId = selectedCase?.id ?? selectedCaseId;
  const sectorTabs = Object.entries(content.sectors).map(([id, label]) => ({ id, label }));
  const selectedCaseSectorLabel =
    selectedCase?.sectorLabel ??
    selectedCase?.sectors
      ?.filter((sectorId) => sectorId !== defaultPortfolioSectorId)
      .map((sectorId) => content.sectors[sectorId])
      .filter(Boolean)
      .join(' / ');
  const selectedCaseContextLine = selectedCase
    ? [selectedCase.company, selectedCaseSectorLabel].filter(Boolean).join(' · ')
    : '';

  useEffect(() => {
    const nextParams = new URLSearchParams(searchParams);
    let shouldReplace = false;

    if (currentSectorId && !portfolioSectorIds.has(currentSectorId)) {
      nextParams.delete('sector');
      shouldReplace = true;
    }

    if (selectedSectorId === defaultPortfolioSectorId && nextParams.get('sector') === defaultPortfolioSectorId) {
      nextParams.delete('sector');
      shouldReplace = true;
    }

    if (selectedCase && currentCaseId !== selectedCase.id) {
      nextParams.set('case', selectedCase.id);
      shouldReplace = true;
    }

    if (shouldReplace) {
      setSearchParams(nextParams, { replace: true });
    }
  }, [
    currentCaseId,
    currentSectorId,
    searchParams,
    selectedCase?.id,
    selectedSectorId,
    setSearchParams
  ]);

  const handleCaseSelect = (caseId) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('case', caseId);
    setSearchParams(nextParams);
  };

  const handleSectorSelect = (sectorId) => {
    const nextParams = new URLSearchParams(searchParams);
    const nextFilteredCases = localizedCases.filter(
      (portfolioCase) =>
        sectorId === defaultPortfolioSectorId || portfolioCase.sectors?.includes(sectorId)
    );
    const nextSelectedCase =
      nextFilteredCases.find((portfolioCase) => portfolioCase.id === selectedCase?.id) ??
      nextFilteredCases[0];

    if (sectorId === defaultPortfolioSectorId) {
      nextParams.delete('sector');
    } else {
      nextParams.set('sector', sectorId);
    }

    if (nextSelectedCase) {
      nextParams.set('case', nextSelectedCase.id);
    }

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
              <div className="mb-6">
                <h1
                  className="text-4xl font-bold leading-tight md:text-5xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {content.title}
                </h1>
              </div>

              <div className="mb-6 flex gap-3 overflow-x-auto pb-1">
                {sectorTabs.map((sector) => {
                  const isActive = sector.id === selectedSectorId;

                  return (
                    <button
                      key={sector.id}
                      type="button"
                      onClick={() => handleSectorSelect(sector.id)}
                      className={cn(
                        'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-background text-muted-foreground hover:border-primary/40 hover:bg-muted hover:text-foreground'
                      )}
                      aria-pressed={isActive}
                    >
                      {sector.label}
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
                <div className="lg:sticky lg:top-24">
                  <Card className="border-primary/10">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl">{content.menuTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-col gap-2 lg:gap-3">
                        {filteredCases.map((portfolioCase) => {
                          const isActive = portfolioCase.id === activeCaseId;

                          return (
                            <button
                              key={portfolioCase.id}
                              type="button"
                              onClick={() => handleCaseSelect(portfolioCase.id)}
                              className={cn(
                                'rounded-xl border px-3 py-3 text-left transition-all duration-200 lg:px-4 lg:py-4',
                                isActive
                                  ? 'border-primary bg-primary/10 text-foreground shadow-sm'
                                  : 'border-border bg-background hover:border-primary/40 hover:bg-muted'
                              )}
                              aria-pressed={isActive}
                            >
                              <div className="font-semibold">{portfolioCase.title}</div>
                              <div className="mt-0.5 text-sm text-muted-foreground lg:mt-1">
                                {portfolioCase.company}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <motion.div
                  key={`${locale}-${selectedCase.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Card className="border-primary/10 shadow-lg">
                    <CardHeader className="pb-6">
                      <div className="mb-3 flex items-start gap-3 text-sm text-muted-foreground">
                        <Building2 className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{selectedCaseContextLine}</span>
                      </div>
                      <CardTitle className="text-2xl leading-tight sm:text-3xl md:text-4xl">
                        {selectedCase.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-8">
                      <section className="space-y-3">
                        <h2 className="text-xl font-semibold">{content.sections.description}</h2>
                        <p className="max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
                          {selectedCase.summary}
                        </p>
                      </section>

                      {selectedCase.preparedArtifacts?.length ? (
                        <section className="space-y-3">
                          <h2 className="text-xl font-semibold">{content.sections.preparedArtifacts}</h2>
                          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground marker:text-primary">
                            {selectedCase.preparedArtifacts.map((item) => (
                              <li key={`artifact-${item}`}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      ) : null}

                      {selectedCase.technologies?.length ? (
                        <section className="space-y-3">
                          <h2 className="text-xl font-semibold">{content.sections.technologies}</h2>
                          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground marker:text-primary">
                            {selectedCase.technologies.map((item) => (
                              <li key={`technology-${item}`}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      ) : null}

                      <section className="space-y-3">
                        <h2 className="text-xl font-semibold">{content.sections.outcome}</h2>
                        <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground marker:text-primary">
                          {selectedCase.outcome.map((item) => (
                            <li key={`outcome-${item}`}>{item}</li>
                          ))}
                        </ul>
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

export default PortfolioPage;
