import React, { FunctionComponent, useContext } from 'react';
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { Context } from "../util/ContextProvider";
import Title from "../components/Title";

interface OwnProps {

}

type Props = OwnProps;

const Game: FunctionComponent<Props> = (props) => {

  const context = useContext(Context);

  return (
    <View style={{...context.container}}>
      <Title />
      <Link to="/">
        <Text>Back</Text>
      </Link>
    </View>
  );
};

export default Game;
