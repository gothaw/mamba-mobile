import { act, render, waitFor } from "@testing-library/react-native";

import { TestIds } from "../../config/constants";
import { ContextProvider } from "../ContextProvider";
import MainRouter from "../MainRouter";

const setup = () => {
  return render(
    <ContextProvider>
      <MainRouter />
    </ContextProvider>
  );
};

describe("MainRouter", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = setup();

    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });
  });
  
  it("should render", async () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  describe(("on main menu"), () => {
    it("should display main menu and menu icon", async () => {
      const mainMenu = await wrapper.getByTestId(TestIds.MainMenu);
      const icon = await wrapper.findByTestId(TestIds.MenuIcon);

      await waitFor(() => {
        expect(icon).toBeTruthy();
        expect(mainMenu).toBeTruthy();
      });
    });
  });

  describe(("in game"), () => {
    it("should display game and menu icon", async () => {

      const startBtn = await wrapper.getByTestId("start");

      await act(async () => {
        await new Promise(resolve => setImmediate(resolve));
      });

      // const click = new MouseEvent("press");
      // Object.assign(click, {preventDefault: jest.fn()});

      // fireEvent(startBtn, "press");

      await act(async () => {
        await new Promise(resolve => setImmediate(resolve));
      });

      const game = await wrapper.findByTestId(TestIds.Game);
      const icon = await wrapper.findByTestId(TestIds.MenuIcon);

      await waitFor(() => {
        console.log(startBtn);

        expect(game).toBeTruthy();
        expect(icon).toBeTruthy();
      });
    });

    // it("should go back to", () => {
    //
    // });
  });
});