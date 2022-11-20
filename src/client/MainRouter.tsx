import React, { FunctionComponent, useContext } from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { View } from "react-native";

import MainMenu from "../views/MainMenu";
import Game from "../views/Game";
import { Paths } from "../config";
import { Context } from "./ContextProvider";

interface Props {}

const MainRouter: FunctionComponent<Props> = () => {

  const context = useContext(Context);

  return (
    <View style={{...context.container}}>
      <NativeRouter>
        <Routes>
          <Route path={Paths.MainMenu} element={<MainMenu/>}/>
          <Route path={Paths.Game} element={<Game/>}/>
        </Routes>
      </NativeRouter>
    </View>
  );
};

export default MainRouter;
