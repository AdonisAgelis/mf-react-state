import styles from './shared-data-context.module.css';

/* eslint-disable-next-line */
export interface SharedDataContextProps {}

export function SharedDataContext(props: SharedDataContextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedDataContext!</h1>
    </div>
  );
}

export default SharedDataContext;
