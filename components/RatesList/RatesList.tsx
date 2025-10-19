import { ReactElement } from 'react';

import styles from './RatesList.module.css';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

interface Rate {
  key: string;
  value: number;
}

interface RatesListProps {
  rates: Rate[];
}

export default function RatesList({ rates }: RatesListProps): ReactElement {
  console.log(rates);

  return (
    <Grid>
      {rates.map(({ key, value }) => (
        <GridItem key={key}>
          <p className={styles.text}>
            1 {key} = {value}
          </p>
        </GridItem>
      ))}
    </Grid>
  );
}
