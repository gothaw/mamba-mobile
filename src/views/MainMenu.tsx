import React, { FunctionComponent, useContext } from 'react';
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { Context } from "../util/ContextProvider";
import Title from "../components/Title";

interface Props {

}

const MainMenu: FunctionComponent<Props> = (props) => {

  const context = useContext(Context);

  return (
    <View style={{...context.container}}>
      <Title text={"Mamba"} />
      <Link to="/game">
        <Text>Play</Text>
      </Link>
    </View>
  );
};

export default MainMenu;
