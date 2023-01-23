import { backgroundShadow,Palette } from "../themeConfig";

export const gameTheme = {
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
    borderWidth: 4,
    borderColor: Palette.Grey,
    ...backgroundShadow
  },
  gameCanvas: {
    width: "100%",
    height: "100%",
    borderWidth: 4,
    borderColor: Palette.Grey
  }
};