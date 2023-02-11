import { NativeRouter, Route, Routes } from "react-router-native";
import { act, render, waitFor } from "@testing-library/react-native";

import { ContextProvider } from "../../client/ContextProvider";
import MainMenu from "../MainMenu";

describe("MainMenu", () => {
  it("should render without crashing", async () => {
    const menu = render(
      <ContextProvider>
        <NativeRouter>
          <Routes>
            <Route path={"/"} element={<MainMenu/>} />
          </Routes>
        </NativeRouter>
      </ContextProvider>
    );

    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });

    await waitFor(() => {
      expect(menu.toJSON()).toMatchSnapshot();
    });
  });
});