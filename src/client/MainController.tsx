import { useFonts } from "expo-font";

import { ContextProvider } from "./ContextProvider";
import MainRouter from "./MainRouter";

const MainController = () => {

  const [fontsLoaded] = useFonts({
    "Luckiest-Guy": require("../assets/fonts/LuckiestGuy-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ContextProvider>
      <MainRouter/>
    </ContextProvider>
  );
};

export default MainController;