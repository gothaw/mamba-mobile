import { FunctionComponent, useContext, useEffect, useState } from "react";
import { View } from "react-native";

import { Context } from "../client/ContextProvider";
import { Game } from "../config";
import { Directions } from "../config/constants";
import { useControls } from "../hooks/useControls";
import { EngineInterface } from "../types";

import AxisPad from "./AxisPad";

interface Props {
  engine: EngineInterface,
}

const AxisPadControls : FunctionComponent<Props> = ({ engine }) => {
  const context = useContext(Context);
  const [ direction, setDirection ] = useState(Directions.None);

  const {
    handleUp,
    handleDown,
    handleLeft,
    handleRight,
    handleRelease
  } = useControls(engine);

  useEffect(() => {
    switch (direction) {
      case Directions.Down:
        handleDown();
        break;
      case Directions.Up:
        handleUp();
        break;
      case Directions.Left:
        handleLeft();
        break;
      case Directions.Right:
        handleRight();
        break;
      case Directions.None:
        handleRelease();
        break;
    }
    return (() => {
      handleRelease();
    });
  }, [direction]);

  const onValue = ({x, y}) => {
    if (x !== 0) {
      if (x > 0) {
        setDirection(Directions.Right);
      } else {
        setDirection(Directions.Left);
      }
    } else if (y !== 0) {
      if (y > 0) {
        setDirection(Directions.Down);
      } else {
        setDirection(Directions.Up);
      }
    } else {
      setDirection(Directions.None);
    }
  };
  
  return (
    <View style={context.theme.gameControls}>
      <AxisPad
        onValue={onValue}
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