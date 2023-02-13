import { FunctionComponent, useContext } from "react";
import { Button, View } from "react-native";

import { Context } from "../client/ContextProvider";

// todo Styling and component WIP

interface Props {
  handleUp: () => void,
  handleDown: () => void,
  handleLeft: () => void,
  handleRight: () => void
}

const Controls: FunctionComponent<Props> = (props) => {
  const { handleUp, handleDown, handleLeft, handleRight } = props;
  const context = useContext(Context);

  return (
    <View style={{...context.theme.gameControls}}>
      <View style={{ marginLeft: 50, width: 50 }}>
        <Button title={"up"} onPress={handleUp}/>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button title={"left"} onPress={handleLeft}/>
        <Button title={"down"} onPress={handleDown}/>
        <Button title={"right"} onPress={handleRight}/>
      </View>
    </View>
  );
};

export default Controls;