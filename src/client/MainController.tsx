import * as SplashScreen from "expo-splash-screen";

import { useAppLauncher } from "../hooks/useAppLauncher";

import { ContextProvider } from "./ContextProvider";
import MainRouter from "./MainRouter";

const MainController = () => {
  const { isAppReady } = useAppLauncher(SplashScreen.hideAsync);

  if (!isAppReady) {
    return null;
  }

  return (
    <ContextProvider>
      <MainRouter />
    </ContextProvider>
  );
};

export default MainController;