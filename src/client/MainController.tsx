import { createContext } from "react";
import { Route, NativeRouter, Routes } from "react-router-native";
import Game from "../views/Game";
import MainMenu from "../views/MainMenu";

import { theme } from "../theme";
import { ContextInterface } from "./ContextInterface";

export const Context = createContext<ContextInterface | null>(null);

const MainController = () => {

  return (
    <Context.Provider value={theme}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<MainMenu/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </NativeRouter>
    </Context.Provider>
  );
}

export default MainController;