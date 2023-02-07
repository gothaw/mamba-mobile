import { render, waitFor } from "@testing-library/react-native";

import MainController from "../MainController";

describe("MainController", () => {
  let component;

  beforeEach(() => {
    component = render(<MainController/>);
  });

  it("should render without crashing", async () => {
    await waitFor(() => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it("should not render if not ready", () => {
    expect(component.toJSON()).toBe(null);
  });
});