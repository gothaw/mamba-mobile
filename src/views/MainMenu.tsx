import React, { FunctionComponent, useContext } from 'react';
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { Context } from "../util/ContextProvider";

interface OwnProps {

}

type Props = OwnProps;

const MainMenu: FunctionComponent<Props> = (props) => {

  const context = useContext(Context);

  return (
    <View style={{...context.container}}>
      <Text>Main Menu</Text>
      <Link to="/game">
        <Text>Game</Text>
      </Link>
    </View>
  );
};

export default MainMenu;
