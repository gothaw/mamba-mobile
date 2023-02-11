import { backgroundShadow,Palette } from "../themeConfig";

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
  gameCanvas: {
    borderColor: Palette.Grey,
    borderWidth: 4,
    height: "100%",
    width: "100%"
  },
  gameWrapper: {
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "80%"
  }
};