import React, { FunctionComponent, useContext, useEffect, useRef } from "react";
import { ImageBackground, View } from "react-native";
import Canvas from "react-native-canvas";

import { Context } from "../client/ContextProvider";
import { Images } from "../config";
import BackgroundGradient from "../containers/BackgroundGradient";

interface Props {
}

const Game: FunctionComponent<Props> = () => {
  const ref = useRef(null);

  const context = useContext(Context);

  useEffect(() => {
    if (ref.current) {
      const ctx = ref.current.getContext("2d");
      ctx.globalAlpha = 0;

      if (ctx) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = "rgba(255, 255, 255, 0.0)";
        ctx.fillRect(0, 0, 20, 20);
        ctx.globalAlpha = 0;
      }
    }
  }, [ref]);

  return (
    <BackgroundGradient>
      <View style={{...context.theme.viewWrapper}}>
        <View style={{...context.theme.gameWrapper}}>
          <ImageBackground
            source={Images.GameBackground}
            style={{...context.theme.gameBackgroundImg}}/>
          <Canvas
            ref={ref}
            style={{...context.theme.gameCanvas}}/>
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default Game;
