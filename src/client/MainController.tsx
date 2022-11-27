import { useAppLauncher } from "../hooks/useAppLauncher";

import { ContextProvider } from "./ContextProvider";
import MainRouter from "./MainRouter";

const MainController = () => {

  const {
    isAppReady,
    onLayoutCallback
  } = useAppLauncher();

  if (!isAppReady) {
    return null;
  }

  return (
    <ContextProvider>
      <MainRouter onLayoutCallback={onLayoutCallback}/>
    </ContextProvider>
  );
};

export default MainController;