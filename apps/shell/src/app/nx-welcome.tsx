import { DataContext } from '@mf-react-state/shared/data-context';
import { useContext } from 'react';
export function NxWelcome({ title }: { title: string }) {
  const { counter, setCounter } = useContext(DataContext);
  return (
    <>
      Shell{' '}
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>{' '}
    </>
  );
}

export default NxWelcome;
