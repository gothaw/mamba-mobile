import { Route, NativeRouter, Routes } from "react-router-native";
import Game from "../views/Game";
import MainMenu from "../views/MainMenu";

import { ContextProvider } from "../util/ContextProvider";

const MainController = () => {

  return (
    <ContextProvider>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<MainMenu/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </NativeRouter>
    </ContextProvider>
  );
}

export default MainController;