'use client';

import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import ExchangeForm from '@/components/ExchangeForm/ExchangeForm';
import ExchangeInfo from '@/components/ExchangeInfo/ExchangeInfo';
import dynamic from 'next/dynamic';

import css from './page.module.css';
const GeolocationChecker = dynamic(
  () => import('@/components/GeolocationChecker/GeolocationChecker'),
  { ssr: false }
);
const SelectRates = dynamic(() => import('@/components/SelectRates/SelectRates'), { ssr: false });
export default function Home() {
  const isError = false;

  return (
    <main className={css.main}>
      <Section>
        <Container>
          <Heading info title="What currencies do you want to exchange?🙂" />

          {isError && (
            <Heading
              error
              title="Something went wrong...😐 Check the data validity and try again!"
            />
          )}
          <ExchangeForm />
          <ExchangeInfo />
        </Container>
      </Section>
    </main>
  );
}
