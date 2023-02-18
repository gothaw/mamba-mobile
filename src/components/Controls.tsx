import { FunctionComponent, useContext } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

import { Context } from "../client/ContextProvider";

// todo Styling and component WIP

interface Props {
  handleUp: () => void,
  handleDown: () => void,
  handleLeft: () => void,
  handleRight: () => void
}

const Controls: FunctionComponent<Props> = (props) => {
  const { handleUp, handleDown, handleLeft, handleRight } = props;
  const context = useContext(Context);

  return (
    <View style={{...context.theme.gameControls}}>
      <View style={{ marginLeft: 50, width: 50 }}>
        <TouchableOpacity onPressIn={handleUp}>
          <Text>Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPressIn={handleLeft} onPressOut={() => {console.log("left button up");}}>
          <Text>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={handleDown}>
          <Text>Down</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={handleRight}>
          <Text>Right</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Controls;