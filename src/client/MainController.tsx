import { createContext } from "react";
import { Route, NativeRouter, Routes } from "react-router-native";
import Game from "../views/Game";
import MainMenu from "../views/MainMenu";

const MainController = () => {
  const Context = createContext({});

  return (
    <Context.Provider value={{}}>
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