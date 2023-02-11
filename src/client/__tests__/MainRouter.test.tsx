import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react-native";

import { TestIds } from "../../config/constants";
import { ContextProvider } from "../ContextProvider";
import MainRouter from "../MainRouter";

const setup = () => {
  return render(
    <ContextProvider>
      <MainRouter/>
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

  it("should render and display menu icon", async () => {
    await waitFor(() => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });

  it("should render icon and main menu", async () => {
    const icon = await wrapper.findByTestId(TestIds.MenuIcon);
    const mainMenu = await wrapper.findByTestId(TestIds.MainMenu);

    await waitFor(() => {
      expect(icon).toBeTruthy();
      expect(mainMenu).toBeTruthy();
    });
  });

  it("should render icon and game when start is clicked", async () => {
    const link = await wrapper.findByTestId("start");
    const icon = await wrapper.findByTestId(TestIds.MenuIcon);

    const mockEvent = {
      preventDefault: jest.fn(),
      defaultPrevented: false
    };

    fireEvent.press(link, mockEvent);

    const game = await wrapper.findByTestId(TestIds.Game);

    await waitFor(() => {
      expect(icon).toBeTruthy();
      expect(game).toBeTruthy();
    });
  });

  it("should go back from the game using notification menu", async () => {
    // todo To be implemented
    expect(0).toBe(0);
  });
});