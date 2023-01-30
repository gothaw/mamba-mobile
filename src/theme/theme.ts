import { ThemeInterface } from "../types";

import { gameTheme } from "./views/gameTheme";
import { mainMenuTheme } from "./views/mainMenuTheme";

export const theme : ThemeInterface = {
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
  ...mainMenuTheme,
  ...gameTheme
};