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
        console.log(x, y);
      }}
      isOrthogonalPad={true}
    />
  );
};

export default AxisPadControls;