import React from "react";
import { Text } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import { act, fireEvent, render, waitFor } from "@testing-library/react-native";

import Button from "../Button";

describe("Button", () => {
  let router;
  const style = {
    borderWidth: 2,
    borderColor: "#ff0000",
    backgroundColor: "#ffe100",
    width: "25%"
  };
  const textStyle = {
    color: "#000000",
    fontSize: 25,
    textAlign: "center"
  };
  const button = <Button
    linkTo={"/game"}
    text={"Click me"}
    style={style}
    textStyle={textStyle}
  />;

  beforeEach(async () => {
    router = render(
      <NativeRouter>
        <Routes>
          <Route path={"/"} element={button}/>
          <Route path={"/game"} element={<Text>Game</Text>}/>
        </Routes>
      </NativeRouter>
    );

    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });
  });

  it("should render with correct styling and text", () => {
    const text = router.getByText("Click me");
    const json = router.toJSON();

    expect(json.props.style).toStrictEqual(style);
    expect(json.children[0].props.style).toStrictEqual(textStyle);
    expect(text).toBeTruthy();
  });

  it("should work with React Native Router", async () => {
    const link = router.getByTestId("click me");

    const mockEvent = {
      preventDefault: jest.fn(),
      defaultPrevented: false
    };

    fireEvent.press(link, mockEvent);

    const game = router.getByText("Game");

    await waitFor(() => {
      expect(game).toBeTruthy();
    });
  });
});