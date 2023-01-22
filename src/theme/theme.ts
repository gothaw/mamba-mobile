import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { ThemeInterface } from "../types";

import { Font, FontSize, Palette } from "./default";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const theme : ThemeInterface = {
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
    shadowColor: Palette.Black,
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
    textShadowColor: Palette.Black,
    textShadowOffset: {width: -1.5, height: 1.5},
    textShadowRadius: 1,
    lineHeight: RFValue(FontSize.L),
    transform: [
      { translateY: windowHeight * 0.036 }
    ]
  },
  mainMenuIconWrapper: {
    position: "absolute",
    top: "5%",
    right: "5%"
  },
  mainMenuIconImg: {
    width: windowWidth * 0.10,
    height: windowHeight * 0.15,
    resizeMode: "contain",
  },
  mainMenuLeftWeb: {
    position: "absolute",
    top: -0.3 * windowHeight,
    left: -0.4 * windowWidth
  },
  mainMenuRightWeb: {
    position: "absolute",
    bottom: -0.3 * windowHeight,
    right: -0.4 * windowWidth
  },
  mainMenuWebImg: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: "contain"
  },
  gameWrapper: {
    width: "80%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  gameBackgroundImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 20,
    borderWidth: 4,
    borderColor: Palette.Grey
  },
  gameCanvas: {
    width: "100%",
    height: "100%",
    borderWidth: 4,
    borderColor: Palette.Grey
  }
};