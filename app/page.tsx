'use client';

import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import ExchangeForm from '@/components/ExchangeForm/ExchangeForm';
import ExchangeInfo from '@/components/ExchangeInfo/ExchangeInfo';

import css from './page.module.css';

export default function Home() {
  const isError = false;

  return (
    <main className={css.main}>
      <Section>
        <Container>
          {/* <p className={css.p}>Hello</p> */}
          {/* <Heading info title="What currencies do you want to exchange?🙂" />

          {isError && (
            <Heading
              error
              title="Something went wrong...😐 Check the data validity and try again!"
            />
          )} */}
          <ExchangeForm />
          <ExchangeInfo />
        </Container>
      </Section>
    </main>
  );
}
