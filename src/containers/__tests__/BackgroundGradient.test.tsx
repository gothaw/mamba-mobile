import { Text } from "react-native";
import { act, render, waitFor } from "@testing-library/react-native";

import { ContextProvider } from "../../client/ContextProvider";
import BackgroundGradient from "../BackgroundGradient";

describe("BackgroundGradient", () => {
  it("should render without crashing", async () => {
    const gradient = render(
      <ContextProvider>
        <BackgroundGradient>
          <Text>Test</Text>
        </BackgroundGradient>
      </ContextProvider>
    );

    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });

    await waitFor(() => {
      expect(gradient.toJSON()).toMatchSnapshot();
    });
  });
});