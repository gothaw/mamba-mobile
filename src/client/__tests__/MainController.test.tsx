import { act, render, waitFor } from "@testing-library/react-native";

import MainController from "../MainController";

describe("MainController", () => {
  it("should render without crashing", async () => {
    const component = render(<MainController/>);

    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });

    await waitFor(() => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it("should not render if not ready", () => {
    const component = render(<MainController/>);

    expect(component.toJSON()).toBe(null);
  });
});