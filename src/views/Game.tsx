import React, { FunctionComponent, useContext, useEffect, useRef, useState } from "react";
import { ImageBackground, View } from "react-native";
import { GameEngine } from "react-native-game-engine";

import { Context } from "../client/ContextProvider";
import ArrowControls from "../components/ArrowControls";
import AxisPadControls from "../components/AxisPadControls";
import Snake from "../components/Snake";
import Spider from "../components/Spider";
import { Game as GameConfig, Images } from "../config";
import { TestIds } from "../config/constants";
import BackgroundGradient from "../containers/BackgroundGradient";
import { GameLoop } from "../game/GameLoop";

interface Props {
}

const Game: FunctionComponent<Props> = () => {
  const context = useContext(Context);
  const [ engine, setEngine ] = useState(null);

  const renderControls = () => {
    const shouldUseAxisPad = !process.env.AXIS_PAD;

    return (
      shouldUseAxisPad ? (<AxisPadControls engine={engine}/>) : (<ArrowControls engine={engine} />)
    );
  };

  return (
    <BackgroundGradient>
      <View testID={TestIds.Game} style={{...context.theme.viewWrapper}}>
        <View style={{...context.theme.gameWrapper}}>
          <ImageBackground
            source={Images.GameBackground}
            style={{...context.theme.gameBackgroundImg}}
          />
          <GameEngine
            ref={ref => setEngine(ref)}
            style={{...context.theme.gameEngine}}
            entities={{
              snake: {
                position: [0, 0],
                renderer: <Snake />,
                speedX: -3,
                speedY: 0
              },
              spider: {
                position: [400, 200],
                renderer: <Spider />,
                speedX: 0,
                speedY: 0
              }
            }}
            systems={[ GameLoop ]}
          />
        </View>
        {renderControls()}
      </View>
    </BackgroundGradient>
  );
};

export default Game;
