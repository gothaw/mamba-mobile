import React, { FunctionComponent, useContext } from "react";
import { View } from "react-native";

import { Context } from "../client/ContextProvider";
import Button from "../components/Button";
import Title from "../components/Title";
import { Paths, Texts } from "../config";
import BackgroundGradient from "../containers/BackgroundGradient";
import { capitalizeFirstLetter } from "../util";

interface Props {}

const MainMenu: FunctionComponent<Props> = () => {

  const context = useContext(Context);

  return (
    <BackgroundGradient>
      <View style={{...context.viewWrapper}}>
        <Title text={Texts.Mamba.toUpperCase()} style={context.mainTitle} />
        <Button text={capitalizeFirstLetter(Texts.Start)} linkTo={Paths.Game} />
      </View>
    </BackgroundGradient>
  );
};

export default MainMenu;
