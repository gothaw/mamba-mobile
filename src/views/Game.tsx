import React, { FunctionComponent, useContext } from "react";
import { View } from "react-native";

import { Context } from "../client/ContextProvider";
import Icon from "../components/Icon";
import BackgroundGradient from "../containers/BackgroundGradient";

interface Props {}

const Game: FunctionComponent<Props> = () => {

  const context = useContext(Context);

  return (
    <BackgroundGradient>
      <View style={{...context.viewWrapper}}>
        <Icon src={require("../assets/img/menu_icon.png")} />
      </View>
    </BackgroundGradient>
  );
};

export default Game;
