import React, { FunctionComponent } from 'react';
import { Text, View } from "react-native";
import { Link } from "react-router-native";

interface OwnProps {

}

type Props = OwnProps;

const MainMenu: FunctionComponent<Props> = (props) => {

  return (
    <View>
      <Text>Main Menu</Text>
      <Link to="/game">
        <Text>Game</Text>
      </Link>
    </View>
  );
};

export default MainMenu;
