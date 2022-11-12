import React, { FunctionComponent } from 'react';
import { View, Text } from "react-native";
import { Link } from "react-router-native";

interface Props {
  style: object
  text: string
}

const Button: FunctionComponent<Props> = (props) => {
  const {text, style} = props;

  return (
    <Link to="/game" style={{...style}}>
      <Text>{text}</Text>
    </Link>
  );
};

export default Button;
