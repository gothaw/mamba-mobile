import { useEffect, useState } from "react";
import * as Font from "expo-font";

import { Fonts } from "../config/assets";

interface UseSplashScreenInterface {
  isAppReady: boolean
}

type hideSplashScreen = () => void;

export const useAppLauncher = (hideSplashScreen: hideSplashScreen): UseSplashScreenInterface => {
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
      console.log("There was an error when loading: ", e);
    });
  }, []);

  useEffect(() => {
    if (isAppReady) {
      hideSplashScreen();
    }
  }, [isAppReady]);

  return { isAppReady };
};
