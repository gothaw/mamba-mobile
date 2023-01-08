import React, { FunctionComponent, useContext } from "react";
import { View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";

import Icon from "../components/Icon";
import { Images, Paths } from "../config";
import Game from "../views/Game";
import MainMenu from "../views/MainMenu";

import { Context } from "./ContextProvider";

interface Props {
  onLayoutCallback: () => void
}

const MainRouter: FunctionComponent<Props> = (props) => {

  const context = useContext(Context);
  const { onLayoutCallback } = props;

  return (
    <View style={{...context.theme.container}} onLayout={onLayoutCallback}>
      <NativeRouter>
        <Routes>
          <Route path={Paths.MainMenu} element={<MainMenu/>}/>
          <Route path={Paths.Game} element={<Game/>}/>
        </Routes>
        <Icon
          src={Images.MenuIcon}
          style={context.theme.mainMenuIconWrapper}
          imgStyle={context.theme.mainMenuIconImg}
        />
      </NativeRouter>
    </View>
  );
};

export default MainRouter;
