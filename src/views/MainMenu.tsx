import React, { FunctionComponent, useContext } from "react";
import { View } from "react-native";

import { Context } from "../client/ContextProvider";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { Paths, Texts } from "../config";
import BackgroundGradient from "../containers/BackgroundGradient";
import { capitalizeFirstLetter } from "../util";

interface Props {}

const MainMenu: FunctionComponent<Props> = () => {

  const context = useContext(Context);

  return (
    <BackgroundGradient>
      <View style={{...context.theme.viewWrapper}}>
        <Logo style={context.theme.mainMenuLogo} />
        <Button
          text={capitalizeFirstLetter(Texts.Start)}
          linkTo={Paths.Game}
          style={context.theme.mainMenuButton}
          textStyle={context.theme.mainMenuButtonText}
        />
      </View>
    </BackgroundGradient>
  );
};

export default MainMenu;
