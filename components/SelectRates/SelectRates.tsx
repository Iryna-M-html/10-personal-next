'use client';

import { useCurrencyStore } from '@/lib/stores/currencyStore';

const availableCurrencies = ['USD', 'EUR', 'UAH', 'GBP', 'JPY'];

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrencyStore();

  return (
    <div style={{ marginTop: '1rem' }}>
      <label htmlFor="currency">Choose currency: </label>
      <select
        id="currency"
        value={currency || ''}
        onChange={(e) => {
          setCurrency(e.target.value);
          localStorage.setItem('user_currency', e.target.value); // ✅ сохраняем вручную выбранную валюту
        }}
      >
        <option value="">Select currency</option>
        {availableCurrencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
}

// import Select, { SingleValue } from 'react-select';

// import symbols from './symbols.json';

// import './ReactSelect.css';
// import styles from './SelectRates.module.css';

// export default function SelectRates({ baseCurrency }) {
//   const handleChange = (selectedOption: SingleValue<OptionType>) => {};

//   return (
//     <div className={styles.box}>
//       <p className={styles.text}>Your base currency:&nbsp;</p>
//       <Select className={styles.select} classNamePrefix="react-select" isSearchable />
//     </div>
//   );
// }
