import { createContext } from 'react';

export type ContextProps = {
  state: any;
  notification: (isNotification: boolean) => void;
};
export const Context = createContext<ContextProps>({} as ContextProps);
