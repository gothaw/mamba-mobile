import React, { FunctionComponent } from 'react';
import { Text, View } from "react-native";
import { Link } from "react-router-native";

interface OwnProps {

}

type Props = OwnProps;

const Game: FunctionComponent<Props> = (props) => {

  return (
    <View>
      <Text>Mamba Game</Text>
      <Link to="/">
        <Text>Back</Text>
      </Link>
    </View>
  );
};

export default Game;
