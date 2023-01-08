import React, { FunctionComponent, useContext } from "react";
import { View } from "react-native";

import { Context } from "../client/ContextProvider";
import Button from "../components/Button";
import Image from "../components/Image";
import { Images, Paths, Texts } from "../config";
import BackgroundGradient from "../containers/BackgroundGradient";
import { capitalizeFirstLetter } from "../util";

interface Props {}

const MainMenu: FunctionComponent<Props> = () => {

  const context = useContext(Context);

  return (
    <BackgroundGradient>
      <View style={{...context.theme.viewWrapper}}>
        <Image
          style={context.theme.mainMenuLeftWeb}
          imgStyle={context.theme.mainMenuWebImg}
          src={Images.MenuWeb}
        />
        <Image
          style={context.theme.mainMenuRightWeb}
          imgStyle={context.theme.mainMenuWebImg}
          src={Images.MenuWeb}
        />
        <Image
          src={Images.MambaLogo}
          imgStyle={context.theme.mainMenuLogo}
        />
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
