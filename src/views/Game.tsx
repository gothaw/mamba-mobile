import React, { FunctionComponent, useContext } from "react";
import { Text, View } from "react-native";

import { Context } from "../client/ContextProvider";
import BackgroundGradient from "../containers/BackgroundGradient";

interface Props {}

const Game: FunctionComponent<Props> = () => {

  const context = useContext(Context);

  return (
    <BackgroundGradient>
      <View style={{...context.theme.viewWrapper}}>
        <Text>Game</Text>
      </View>
    </BackgroundGradient>
  );
};

export default Game;
