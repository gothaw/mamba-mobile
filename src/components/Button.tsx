import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import { Link } from "react-router-native";

interface Props {
  linkTo: string,
  text: string,
  style?: object,
  textStyle?: object
}

const Button: FunctionComponent<Props> = (props) => {
  const {text, linkTo, style, textStyle} = props;

  return (
    <Link to={linkTo} style={{...style}} underlayColor={"none"} testID={text.toLowerCase()}>
      <Text style={{...textStyle}}>{text}</Text>
    </Link>
  );
};

export default Button;
