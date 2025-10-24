'use client';

import { Wave } from 'react-animated-text';

import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import RatesList from '@/components/RatesList/RatesList';

import Heading from '@/components/Heading/Heading';

import css from './RatesPage.module.css';
import { useCurrencyStore } from '@/lib/stores/currencyStore';
import { useEffect, useMemo } from 'react';
import { latestRates } from '@/lib/service/exchangeAPI';
import Loader from '@/components/Loader/Loader';
import Filter from '@/components/Filter/Filter';

export default function RatesPage() {
  const isError = useCurrencyStore((state) => state.isError);
  const isLoading = useCurrencyStore((state) => state.isLoading);
  const baseCurrency = useCurrencyStore((state) => state.baseCurrency);
  const rates = useCurrencyStore((state) => state.rates);
  const filter = useCurrencyStore((state) => state.filter);
  const setRates = useCurrencyStore((state) => state.setRates);
  const setisLoading = useCurrencyStore((state) => state.setIsLoading);
  const setisError = useCurrencyStore((state) => state.setIsError);
  const filtereRates = useMemo(() => {
    return rates
      .filter(([key]) => key !== baseCurrency && key.toLowerCase().includes(filter.toLowerCase()))
      .map(([key, value]) => ({ key, value: Number((1 / value).toFixed(2)) }));
  }, [rates, baseCurrency, filter]);
  useEffect(() => {
    if (!baseCurrency) return;

    setisLoading(true);

    latestRates(baseCurrency)
      .then((data) => {
        setRates(data);
      })
      .catch((err) => {
        console.error(err);
        setisError('Failed to fetch rates.');
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [baseCurrency, setRates, setisLoading, setisError]);

  if (!baseCurrency) return <Loader />;
  if (isLoading) return <Loader />;
  return (
    <main className={css.main}>
      <Section>
        <Container>
          <Heading
            info
            bottom
            title={
              <Wave
                text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
                effect="fadeOut"
                effectChange={4.0}
              />
            }
          />
          {rates.length > 0 && <Filter />}
          {filtereRates.length > 0 && <RatesList rates={filtereRates} />}
          {isError && (
            <Heading error title="Something went wrong...😐 We cannot show current rates!" />
          )}
        </Container>
      </Section>
    </main>
  );
}
