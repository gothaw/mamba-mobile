import { ThemeInterface } from "../types";

import { gameTheme } from "./views/gameTheme";
import { mainMenuTheme } from "./views/mainMenuTheme";

export const theme : ThemeInterface = {
  container: {
    flex: 1,
    position: "relative"
  },
  viewWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative"
  },
  ...mainMenuTheme,
  ...gameTheme
};