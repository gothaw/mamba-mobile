import { FunctionComponent, useContext } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

import { Context } from "../client/ContextProvider";
import { Images } from "../config";
import { useControls } from "../hooks/useControls";
import { EngineInterface } from "../types/engineInterface";

import ControlsButton from "./ControlsButton";

// todo Styling and component WIP

interface Props {
  engine: EngineInterface,
}

const ArrowControls: FunctionComponent<Props> = ({ engine }) => {
  const context = useContext(Context);

  const {
    handleUp,
    handleDown,
    handleLeft,
    handleRight,
    handleRelease
  } = useControls(engine);

  return (
    <View style={context.theme.gameControls}>
      <View style={context.theme.gameControlsTopRow}>
        <ControlsButton
          handlePressIn={handleUp}
          handlePressOut={handleRelease}
          imgStyle={context.theme.gameControlsButtonImg}
          src={Images.ArrowUp}
          style={context.theme.gameControlsButton}
        />
      </View>
      <View style={context.theme.gameControlsBottomRow}>
        <ControlsButton
          handlePressIn={handleLeft}
          handlePressOut={handleRelease}
          imgStyle={context.theme.gameControlsButtonImg}
          src={Images.ArrowLeft}
          style={context.theme.gameControlsButton}
        />
        <ControlsButton
          handlePressIn={handleDown}
          handlePressOut={handleRelease}
          imgStyle={context.theme.gameControlsButtonImg}
          src={Images.ArrowDown}
          style={context.theme.gameControlsButton}
        />
        <ControlsButton
          handlePressIn={handleRight}
          handlePressOut={handleRelease}
          imgStyle={context.theme.gameControlsButtonImg}
          src={Images.ArrowRight}
          style={context.theme.gameControlsButton}
        />
      </View>
    </View>
  );
};

export default ArrowControls;