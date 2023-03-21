import { FunctionComponent, useContext } from "react";
import { View } from "react-native";

import { Context } from "../client/ContextProvider";
import { Images } from "../config";
import { useControls } from "../hooks/useControls";
import { EngineInterface } from "../types";

import ArrowControlsButton from "./ArrowControlsButton";

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
        <ArrowControlsButton
          handlePressIn={handleUp}
          handlePressOut={handleRelease}
          imgStyle={context.theme.gameControlsButtonImg}
          src={Images.ArrowUp}
          style={context.theme.gameControlsButton}
        />
      </View>
      <View style={context.theme.gameControlsBottomRow}>
        <ArrowControlsButton
          handlePressIn={handleLeft}
          handlePressOut={handleRelease}
          imgStyle={context.theme.gameControlsButtonImg}
          src={Images.ArrowLeft}
          style={context.theme.gameControlsButton}
        />
        <ArrowControlsButton
          handlePressIn={handleDown}
          handlePressOut={handleRelease}
          imgStyle={context.theme.gameControlsButtonImg}
          src={Images.ArrowDown}
          style={context.theme.gameControlsButton}
        />
        <ArrowControlsButton
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