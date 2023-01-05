import React, { FunctionComponent } from "react";
import { Image, View } from "react-native";

interface Props {
  style: object
}

const Logo: FunctionComponent<Props> = (props) => {
  const {style} = props;

  return (
    <View>
      <Image
        style={{...style}}
        source={require("../assets/img/mamba_logo_color.png")}
      />
    </View>
  );
};

export default Logo;
