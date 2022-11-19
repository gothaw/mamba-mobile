import { ContextInterface } from "../types";
import { Palette } from "./default";

export const theme : ContextInterface = {
  container: {
    flex: 1,
    backgroundColor: Palette.Green,
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
    top: -100,
    left: 0
  }
};