import React, { Children, useReducer } from 'react';

import { Context } from './Context';
import { reducer } from './reducer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initial_state: any = {
  notification: false,
};

export const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initial_state);

  const notification = (isNotification: boolean) => {
    dispatch({ type: 'notification', payload: isNotification });
  };

  return (
    <Context.Provider value={{ notification, state }}>
      {children}
    </Context.Provider>
  );
};
