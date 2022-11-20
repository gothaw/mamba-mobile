import { ContextInterface } from "../types";
import { FontSize, Palette } from "./default";

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
  mainTitle: {
    position: "relative",
    color: Palette.Yellow,
    fontSize: FontSize.Title,
    top: -100,
    left: 0,
    letterSpacing: 3,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 15
  }
};