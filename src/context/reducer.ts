import React from 'react';

type Action = {
  type: 'notification';
  payload: boolean;
};
export const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'notification':
      return {
        notification: action.payload,
      };
  }
};
