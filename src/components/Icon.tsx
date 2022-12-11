import React, { FunctionComponent } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { Link } from "react-router-native";

interface OwnProps {
  src: ImageSourcePropType
}

type Props = OwnProps;

const Icon: FunctionComponent<Props> = (props) => {
  const { src } = props;

  return (
    <View>
      <Link to={"/"} underlayColor={"none"}>
        <Image source={src} />
      </Link>
    </View>
  );
};

export default Icon;
