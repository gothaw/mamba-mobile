import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Fonts } from "../config/assets";

interface UseSplashScreenInterface {
  isAppReady: boolean
  onLayoutCallback: () => void
}

export const useAppLauncher = (): UseSplashScreenInterface => {
  // Keep the splash screen visible while we fetch resources
  // SplashScreen.preventAutoHideAsync();

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await Font.loadAsync({
        "Luckiest-Guy": Fonts.LuckiestGuy
      });
    };

    prepare().then(() => {
      setIsAppReady(true);
    }).catch(e => {
      console.error("There was an error when loading: ", e);
    });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [isAppReady]);

  return {
    isAppReady,
    onLayoutCallback: onLayoutRootView
  };
};
