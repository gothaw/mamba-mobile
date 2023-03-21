import { FunctionComponent } from "react";
import { View } from "react-native";

import { Game, TestIds } from "../config/constants";

// todo Styling and component WIP

interface Props {
  position?: [number, number]
}

const Spider: FunctionComponent<Props> = (props) => {
  const { position } = props;
  const x = position[0];
  const y = position[1];

  return (
    <View
      testID={TestIds.Spider}
      style={{
        backgroundColor: "black",
        borderRadius: Game.SpiderSize * 0.5,
        height: Game.SpiderSize,
        left: x,
        position: "absolute",
        top: y,
        width: Game.SpiderSize
      }}
    />
  );
};

export default Spider;