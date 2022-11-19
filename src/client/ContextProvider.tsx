import React, { createContext, FunctionComponent } from 'react';

import { ContextInterface } from "../types";
import { theme } from "../theme";

type Props = {
  children: React.ReactNode
};

const Context = createContext<ContextInterface | null>(null);

const ContextProvider: FunctionComponent<Props> = ({children}) => {
  return (
    <Context.Provider value={theme}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
