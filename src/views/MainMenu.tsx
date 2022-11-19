import React, { FunctionComponent, useContext } from 'react';
import { View } from "react-native";

import { Context } from "../client/ContextProvider";
import { Texts, Paths } from "../config"
import Title from "../components/Title";
import Button from "../components/Button";
import { capitalizeFirstLetter } from "../util";

interface Props {}

const MainMenu: FunctionComponent<Props> = () => {

  const context = useContext(Context);

  return (
    <View style={{...context.viewWrapper}}>
      <Title text={Texts.Mamba.toUpperCase()} style={context.mainTitle} />
      <Button text={capitalizeFirstLetter(Texts.Start)} linkTo={Paths.Game} />
    </View>
  );
};

export default MainMenu;
