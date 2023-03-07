import { FunctionComponent, useContext } from "react";

import { Context } from "../client/ContextProvider";
import { EngineInterface } from "../types/engineInterface";

import AxisPad from "./AxisPad";

interface Props {
  engine: EngineInterface,
}

const AxisPadControls : FunctionComponent<Props> = ({ engine }) => {
  const context = useContext(Context);
  
  return (
    <AxisPad
      onValue={({ x, y }) => {
        // values are between -1 and 1
        console.log(x, y);
      }}
      isOrthogonalPad={true}
      step={0.01}
    />
  );
};

export default AxisPadControls;