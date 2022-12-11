import { RFValue } from "react-native-responsive-fontsize";

import { ContextInterface } from "../types";

import { Font, FontSize, Palette } from "./default";

export const theme : ContextInterface = {
  container: {
    flex: 1,
    position: "relative"
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  mainMenuLogo: {
    resizeMode: "contain"
  },
  mainMenuButton: {
    width: "50%",
    alignItems: "center"
  },
  mainMenuButtonText: {
    color: Palette.Yellow,
    fontFamily: Font.LuckiestGuy,
    fontSize: RFValue(FontSize.L),
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 1,
  }
};