import React, { FunctionComponent, useContext } from 'react';
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { Context } from "../client/MainController";

interface OwnProps {

}

type Props = OwnProps;

const Game: FunctionComponent<Props> = (props) => {

  const context = useContext(Context);

  return (
    <View style={{...context.container}}>
      <Text>Mamba Game</Text>
      <Link to="/">
        <Text>Back</Text>
      </Link>
    </View>
  );
};

export default Game;
