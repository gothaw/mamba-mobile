import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { backgroundShadow,Font, FontSize, Palette } from "../themeConfig";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const mainMenuTheme = {
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
    ...backgroundShadow
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
  }
};