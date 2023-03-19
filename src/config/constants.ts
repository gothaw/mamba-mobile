import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export enum Texts {
  Start = "start",
  Mamba = "mamba"
}

export enum TestIds {
  MainLogo = "main-logo",
  MainMenu = "main-menu",
  MenuIcon = "menu-icon",
  Game = "game",
  Snake = "snake",
  Spider = "spider"
}

export enum Game {
  Width = 0.8 * windowWidth,
  Height = windowHeight,
  Border = 10,
  HandlerSize = 0.1 * windowWidth,
  PadSize = 0.2 * windowWidth
}

export enum Events {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right"
}

export enum Directions {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
  None = "none"
}
