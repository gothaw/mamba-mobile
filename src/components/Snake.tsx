import { FunctionComponent } from "react";
import { View } from "react-native";

import { Game, TestIds } from "../config/constants";

// todo Styling and component WIP

interface Props {
  position?: [number, number]
}

const Snake: FunctionComponent<Props> = (props) => {
  const { position } = props;
  const x = position[0];
  const y = position[1];

  return (
    <View
      testID={TestIds.Snake}
      style={{
        backgroundColor: "red",
        borderRadius: Game.SnakeHeadSize * 0.5,
        height: Game.SnakeHeadSize,
        left: x,
        position: "absolute",
        top: y,
        width: Game.SnakeHeadSize
      }}
    />
  );
};

export default Snake;