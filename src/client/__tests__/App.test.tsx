import { act, render, waitFor } from "@testing-library/react-native";

import App from "../App";

describe("App", () => {
  it("should render without crashing", async () => {
    const app = render(<App/>);

    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });

    await waitFor(() => {
      expect(app.toJSON()).toMatchSnapshot();
    });
  });
});