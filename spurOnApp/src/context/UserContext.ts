import {createContext, useContext} from 'react';

export const defaultUsername = '';
export const CurrentUserContext = createContext({
  username: '',
  setUsername: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
});

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};
