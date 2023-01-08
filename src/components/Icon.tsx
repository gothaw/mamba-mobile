import React, { FunctionComponent } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { Link } from "react-router-native";

interface OwnProps {
  src: ImageSourcePropType,
  style?: object,
  imgStyle?: object
}

type Props = OwnProps;

const Icon: FunctionComponent<Props> = (props) => {
  const { src, style, imgStyle } = props;

  return (
    <View style={{...style}}>
      <Link to={"/"} underlayColor={"none"}>
        <Image source={src} style={{...imgStyle}} />
      </Link>
    </View>
  );
};

export default Icon;
