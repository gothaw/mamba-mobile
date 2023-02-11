import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { backgroundShadow,Font, FontSize, Palette } from "../themeConfig";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const mainMenuTheme = {
  mainMenuButton: {
    backgroundColor: Palette.DarkGreen,
    borderColor: Palette.Yellow,
    borderRadius: 15,
    borderWidth: 4,
    height: "15%",
    marginTop: 15,
    width: "25%",
    ...backgroundShadow
  },
  mainMenuButtonText: {
    boxSizing: "border-box",
    color: Palette.Yellow,
    fontFamily: Font.LuckiestGuy,
    fontSize: RFValue(FontSize.L),
    height: RFValue(FontSize.L),
    letterSpacing: 1.5,
    lineHeight: RFValue(FontSize.L),
    margin: 0,
    padding: 0,
    textAlign: "center",
    textShadowColor: Palette.Black,
    textShadowOffset: {
      height: 1.5,
      width: -1.5
    },
    textShadowRadius: 1,
    transform: [
      { translateY: windowHeight * 0.036 }
    ]
  },
  mainMenuIconImg: {
    height: windowHeight * 0.15,
    resizeMode: "contain",
    width: windowWidth * 0.10
  },
  mainMenuIconWrapper: {
    position: "absolute",
    right: "5%",
    top: "5%"
  },
  mainMenuLeftWeb: {
    left: -0.4 * windowWidth,
    position: "absolute",
    top: -0.3 * windowHeight
  },
  mainMenuLogo: {
    height: windowHeight * 0.5,
    resizeMode: "contain",
    width: windowWidth * 0.5
  },
  mainMenuRightWeb: {
    bottom: -0.3 * windowHeight,
    position: "absolute",
    right: -0.4 * windowWidth
  },
  mainMenuWebImg: {
    height: windowHeight,
    resizeMode: "contain",
    width: windowWidth
  }
};