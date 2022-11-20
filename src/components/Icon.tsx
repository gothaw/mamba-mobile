import React, { FunctionComponent } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { Link } from "react-router-native";

interface OwnProps {
  src: string
}

type Props = OwnProps;

const Icon: FunctionComponent<Props> = (props) => {
  const { src } = props;

  return (
    <View>
      <Link to={"/"}>
        <Image source={require("../assets/img/menu_icon.png")} />
      </Link>
    </View>
  );
};

export default Icon;
