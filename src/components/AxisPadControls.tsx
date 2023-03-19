import { FunctionComponent, useContext } from "react";
import { View } from "react-native";

import { Context } from "../client/ContextProvider";
import { Game } from "../config";
import { EngineInterface } from "../types/engineInterface";

import AxisPad from "./AxisPad";

interface Props {
  engine: EngineInterface,
}

const AxisPadControls : FunctionComponent<Props> = ({ engine }) => {
  const context = useContext(Context);
  
  return (
    <View style={context.theme.gameControls}>
      <AxisPad
        onValue={({ x, y }) => {
          console.log(x, y);
        }}
        isOrthogonalPad={true}
        handlerSize={Game.HandlerSize}
        size={Game.PadSize}
        handlerStyle={context.theme.axisPadHandler}
        wrapperStyle={context.theme.axisPad}
      />
    </View>
  );
};

export default AxisPadControls;