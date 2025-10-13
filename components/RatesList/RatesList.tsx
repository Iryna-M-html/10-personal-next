import styles from './RatesList.module.css';
import { getCurrenciesList } from '../../lib/service/exchangeAPI';

export default function RatesList() {
  return (
    <ul className={styles.list}>
      {Object.entries(getCurrenciesList).map(([key, value]) => (
        <li className={styles.item} key={key}>
          <p className={styles.text}>
            1 {key} = {value}
          </p>
        </li>
      ))}
    </ul>
  );
}
