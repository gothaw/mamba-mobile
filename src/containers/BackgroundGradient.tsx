import React, { FunctionComponent, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Context } from "../client/ContextProvider";
import { Palette } from "../theme";

type Props = {
  children: React.ReactNode
};


const BackgroundGradient: FunctionComponent<Props> = (props) => {

  const { children } = props;
  const context = useContext(Context);

  return (
    <LinearGradient
      style={{...context.theme.container}}
      colors={[`${Palette.BackgroundLightGreen}`, `${Palette.BackgroundGreen}`]}
      start={{ x: 0, y: 0}}
      end={{ x: 0.25, y: 1.0}}
    >
      {children}
    </LinearGradient>
  );
};

export default BackgroundGradient;
