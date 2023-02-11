import { NativeRouter, Route, Routes } from "react-router-native";
import { act, render, waitFor } from "@testing-library/react-native";

import { ContextProvider } from "../../client/ContextProvider";
import Game from "../Game";

describe("Game", () => {
  it("should render without crashing", async () => {
    const game = render(
      <ContextProvider>
        <NativeRouter>
          <Routes>
            <Route path={"/"} element={<Game/>} />
          </Routes>
        </NativeRouter>
      </ContextProvider>
    );

    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });

    await waitFor(() => {
      expect(game.toJSON()).toMatchSnapshot();
    });
  });
});