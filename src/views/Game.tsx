import React, { FunctionComponent, useContext } from 'react';
import { Text, View } from "react-native";
import { Context } from "../util/ContextProvider";
import Icon from "../components/Icon";

interface OwnProps {

}

type Props = OwnProps;

const Game: FunctionComponent<Props> = (props) => {

  const context = useContext(Context);

  return (
    <View style={{...context.container}}>
      <Icon src={"../assets/img/menu_icon.png"} />
    </View>
  );
};

export default Game;
