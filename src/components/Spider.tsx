import { FunctionComponent } from "react";
import { View } from "react-native";

import { TestIds } from "../config/constants";

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
        borderRadius: 7.5,
        height: 15,
        left: x,
        position: "absolute",
        top: y,
        width: 15
      }}
    />
  );
};

export default Spider;