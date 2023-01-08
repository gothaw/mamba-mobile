import React, { FunctionComponent } from "react";
import { Image as Img, ImageSourcePropType, View } from "react-native";

interface Props {
  src: ImageSourcePropType,
  style?: object,
  imgStyle?: object
}

const Image: FunctionComponent<Props> = (props) => {
  const {src, imgStyle, style} = props;

  return (
    <View style={{...style}}>
      <Img
        style={{...imgStyle}}
        source={src}
      />
    </View>
  );
};

export default Image;
