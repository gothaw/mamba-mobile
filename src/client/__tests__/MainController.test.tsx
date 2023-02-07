import { act, render, waitFor } from "@testing-library/react-native";

import MainController from "../MainController";

describe("MainController", () => {
  let router;

  beforeAll(async () => {
    router = render(<MainController/>);

    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });
  });

  it("should render without crashing", async () => {
    await waitFor(() => {
      expect(router.toJSON()).toMatchSnapshot();
    });
  });

  it("should not render if not ready", () => {
    expect(router.toJSON()).toBe(null);
  });
});