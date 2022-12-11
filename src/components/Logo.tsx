import React, { FunctionComponent } from "react";
import { Dimensions, Image, View } from "react-native";

interface Props {
  style: object
}

const Logo: FunctionComponent<Props> = (props) => {
  const {style} = props;

  // todo https://www.npmjs.com/package/react-native-responsive-screen
  const width = Dimensions.get("window").width * 0.5;
  const height = Dimensions.get("window").height * 0.5;

  return (
    <View>
      <Image
        style={
          {
            ...style,
            maxWidth: width,
            maxHeight: height
          }
        }
        source={require("../assets/img/mamba_logo_color.png")}
      />
    </View>
  );
};

export default Logo;
