import styles from './ExchangeInfo.module.css';
import { convertTO } from '@/lib/service/exchangeAPI';

export default function ExchangeInfo() {
  const { amount, from, to } = convertTO.request;
  const { rate } = convertTO.meta;
  const { response } = convertTO;
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <p className={styles.details}>
          <span className={styles.accent}>{amount} </span>
          <span className={styles.accent}>{from} </span>
          in <span className={styles.accent}>{to}</span>
        </p>

        <p className={styles.details}>
          at the rate of
          <span className={styles.accent}> {rate}</span>
        </p>

        <p className={styles.title}>
          {response.toFixed(2)} {to}
        </p>
      </div>
    </div>
  );
}
