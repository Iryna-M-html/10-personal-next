import styles from './Filter.module.css';
import { useStore } from '../../lib/stores/zustandStore';

export default function Filter() {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  return (
    <input
      type="text"
      placeholder="What currency are you looking for?🧐"
      value={filter}
      onChange={(e) => setFilter(e.target.value.toLowerCase())}
      className={styles.input}
    />
  );
}
