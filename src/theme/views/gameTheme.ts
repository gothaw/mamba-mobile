import { Dimensions } from "react-native";

import { Game } from "../../config/";
import { backgroundShadow, Palette } from "../themeConfig";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const gameTheme = {
  gameBackgroundImg: {
    borderColor: Palette.Grey,
    borderWidth: 4,
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    ...backgroundShadow
  },
  gameControls: {
    bottom: "3%",
    position: "absolute",
    right: 0
  },
  gameControlsBottomRow: {
    flexDirection: "row"
  },
  gameControlsButton: {
    marginLeft: 5
  },
  gameControlsButtonImg: {
    height: windowHeight * 0.10,
    resizeMode: "contain",
    width: windowWidth * 0.06
  },
  gameControlsTopRow: {
    alignItems: "center",
    marginBottom: 15
  },
  gameEngine: {
    borderColor: Palette.Grey,
    borderWidth: 4,
    flex: null,
    height: "100%",
    width: "100%"
  },
  gameWrapper: {
    height: Game.Height,
    left: 0,
    position: "absolute",
    top: 0,
    width: Game.Width
  }
};