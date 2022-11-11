import React, { FunctionComponent } from 'react';
import { Text } from "react-native";
import { useFonts } from "expo-font";

interface Props {
}

const Title: FunctionComponent<Props> = (props) => {

  return (
    <Text style={{ fontFamily: "Luckiest-Guy" }}>Mamba</Text>
  );
};

export default Title;
