import renderer from "react-test-renderer";

import App from "../App";

describe("App", () => {

  it("should render a main controller without crashing", async () => {
    renderer.create(<App/>).toJSON();

    expect(0).toBe(0);
  });
});