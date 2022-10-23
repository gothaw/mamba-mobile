import { Text, View } from 'react-native';

import styles from "./app.scss";

export default function App() {

  console.log(styles)

    return (
    <View style={
      // @ts-ignore
      styles.container
    }>
      <Text style={
        // @ts-ignore
        styles.text
      }
      >Hello World!!</Text>
    </View>
  );
}
