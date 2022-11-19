import React, { FunctionComponent } from 'react';
import { Text } from "react-native";

interface Props {
  text: string,
  style: object
}

const Title: FunctionComponent<Props> = (props) => {

  const { text, style } = props;

  return (
    <Text style={{
      fontFamily: "Luckiest-Guy",
      ...style
    }}>{text}</Text>
  );
};

export default Title;
