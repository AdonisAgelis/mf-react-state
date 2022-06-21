import { createContext, useState } from 'react';

export interface SharedDataContextProps {
  children: JSX.Element;
}
export const DataContext = createContext<Record<string, unknown>>({});

export function DataProvider({ children }: SharedDataContextProps) {
  const [counter, setCounter] = useState(1);
  return (
    <DataContext.Provider value={{ counter, setCounter }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
