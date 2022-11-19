import React, { FunctionComponent, useContext } from 'react';
import { View } from "react-native";

import { Context } from "../client/ContextProvider";
import Icon from "../components/Icon";

interface Props {}

const Game: FunctionComponent<Props> = () => {

  const context = useContext(Context);

  return (
    <View style={{...context.viewWrapper}}>
      <Icon src={"../assets/img/menu_icon.png"} />
    </View>
  );
};

export default Game;
