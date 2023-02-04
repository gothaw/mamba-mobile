import { act, render } from "@testing-library/react-native";

import MainMenu from "../../views/MainMenu";
import App from "../App";

describe("App", () => {
  
  it("should render a main controller without crashing", async () => {
    render(<App/>);

    expect(0).toBe(0);
  });
});