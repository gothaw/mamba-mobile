import { render, waitFor } from "@testing-library/react-native";

import App from "../App";

describe("App", () => {
  it("should render without crashing", async () => {
    const app  = render(<App/>);

    await waitFor(() => {
      expect(app.toJSON()).toBeTruthy();
    });
  });
});