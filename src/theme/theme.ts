import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { ContextInterface } from "../types";

import { Font, FontSize, Palette } from "./default";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const theme : ContextInterface = {
  container: {
    flex: 1,
    position: "relative",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  mainMenuLogo: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.5,
    resizeMode: "contain"
  },
  mainMenuButton: {
    marginTop: 15,
    borderWidth: 4,
    borderColor: Palette.Yellow,
    backgroundColor: Palette.DarkGreen,
    borderRadius: 15,
    height: "15%",
    width: "25%",
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  mainMenuButtonText: {
    height: RFValue(FontSize.L),
    boxSizing: "border-box",
    textAlign: "center",
    padding: 0,
    margin: 0,
    color: Palette.Yellow,
    fontFamily: Font.LuckiestGuy,
    fontSize: RFValue(FontSize.L),
    letterSpacing: 1.5,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: {width: -1.5, height: 1.5},
    textShadowRadius: 1,
    lineHeight: RFValue(FontSize.L),
    transform: [
      { translateY: windowHeight * 0.036 }
    ]
  }
};