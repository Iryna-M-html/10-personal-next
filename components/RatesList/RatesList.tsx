import styles from './RatesList.module.css';
import { getCurrenciesList } from '../../lib/service/exchangeAPI';
// import { useStore, type StoreState } from '../../lib/stores/zustandStore';
// export default function RatesList() {
//   const { rates, baseCurrency, filter } = useStore((state: StoreState) => ({
//     rates: state.rates,
//     baseCurrency: state.baseCurrency,
//     filter: state.filter,
//   }));

//   const filteredRates = Object.entries(rates)
//     .filter(([key]) => key !== baseCurrency && key.toLowerCase().includes(filter))
//     .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));

//   return (
//     <ul className={styles.list}>
//       {filteredRates.map(({ key, value }) => (
//         <li key={key} className={styles.item}>
//           <span className={styles.text}>{key}</span>
//           <span className={styles.text}>{value}</span>
//         </li>
//       ))}
//     </ul>
//   );
// }
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
