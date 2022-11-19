import React, { FunctionComponent } from 'react';
import { Text } from "react-native";
import { Link } from "react-router-native";

interface Props {
  linkTo: string,
  text: string,
  style?: object
}

const Button: FunctionComponent<Props> = (props) => {
  const {text, linkTo, style} = props;

  return (
    <Link to={linkTo} style={{...style}}>
      <Text>{text}</Text>
    </Link>
  );
};

export default Button;
