import { FunctionComponent, useContext } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

import { Context } from "../client/ContextProvider";
import { useControls } from "../hooks/useControls";
import { EngineInterface } from "../types/engineInterface";

// todo Styling and component WIP

interface Props {
  engine: EngineInterface,
}

const Controls: FunctionComponent<Props> = ({ engine }) => {
  const context = useContext(Context);

  const {
    handleUp,
    handleDown,
    handleLeft,
    handleRight,
    handleRelease
  } = useControls(engine);

  return (
    <View style={{...context.theme.gameControls}}>
      <View style={{ marginLeft: 50, width: 50 }}>
        <TouchableOpacity onPressIn={handleUp} onPressOut={handleRelease}>
          <Text>Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPressIn={handleLeft}
          onPressOut={handleRelease}
        >
          <Text>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={handleDown}
          onPressOut={handleRelease}
        >
          <Text>Down</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={handleRight}
          onPressOut={handleRelease}
        >
          <Text>Right</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Controls;