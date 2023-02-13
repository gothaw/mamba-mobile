import React, { FunctionComponent, useContext, useRef, useState } from "react";
import { ImageBackground, View } from "react-native";
import { GameEngine } from "react-native-game-engine";

import { Context } from "../client/ContextProvider";
import Controls from "../components/Controls";
import Spider from "../components/Spider";
import { Images } from "../config";
import { TestIds } from "../config/constants";
import BackgroundGradient from "../containers/BackgroundGradient";
import { GameLoop } from "../systems/GameLoop";

interface Props {
}

// todo Styling and view WIP

const Game: FunctionComponent<Props> = () => {
  const context = useContext(Context);
  const ref = useRef(null);
  const [x , setX] = useState(50);
  const [y , setY] = useState(100);

  const handleUp = () => {
    setY(prevState => prevState - 1);
  };

  const handleDown = () => {
    setY(prevState => prevState + 1);
  };

  const handleLeft = () => {
    setX(prevState => prevState - 1);
  };

  const handleRight = () => {
    setX(prevState => prevState + 1);
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
            ref={ref}
            style={{...context.theme.gameEngine}}
            entities={{
              spider: { position: [200, 200], renderer: <Spider />, speedX: 1, speedY: 0 }
            }}
            systems={[ GameLoop ]}
          />
        </View>

        <Controls
          handleUp={handleUp}
          handleDown={handleDown}
          handleLeft={handleLeft}
          handleRight={handleRight}
        />
      </View>
    </BackgroundGradient>
  );
};

export default Game;
