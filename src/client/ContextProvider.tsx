import React, { createContext, FunctionComponent } from "react";

import { theme } from "../theme";
import { ContextInterface } from "../types";

type Props = {
  children: React.ReactNode
};

const Context = createContext<ContextInterface | null>(null);

const ContextProvider: FunctionComponent<Props> = ({children}) => {
  return (
    <Context.Provider value={{ theme }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
