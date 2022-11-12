import React, { FunctionComponent } from 'react';
import { Text } from "react-native";
import { useFonts } from "expo-font";

interface Props {
  text: string
}

const Title: FunctionComponent<Props> = ({text}) => {

  return (
    <Text style={{ fontFamily: "Luckiest-Guy" }}>{text}</Text>
  );
};

export default Title;
