import React, { FunctionComponent, useContext, useEffect, useRef, useState } from "react";
import { ImageBackground, View } from "react-native";
import { GameEngine } from "react-native-game-engine";

import { Context } from "../client/ContextProvider";
import Controls from "../components/Controls";
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
                position: [636.58, 396.43],
                renderer: <Spider />,
                speedX: 0,
                speedY: 0
              }
            }}
            systems={[ GameLoop ]}
          />
        </View>
        <Controls engine={engine} />
      </View>
    </BackgroundGradient>
  );
};

export default Game;
