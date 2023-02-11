import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { act, render } from "@testing-library/react-native";

import { Images } from "../../config";
import Icon from "../Icon";

describe("Button", () => {
  let router;
  const style = {
    position: "absolute",
    top: 0,
    right: 0
  };
  const iconStyle = {
    width: 100,
    height: 100,
    resizeMode: "contain"
  };


  const icon = <Icon
    style={style}
    src={Images.MenuIcon}
    imgStyle={iconStyle}
    testId={"test-icon"}
  />;

  beforeEach(async () => {
    router = render(
      <NativeRouter>
        <Routes>
          <Route path={"/"} element={icon}/>
        </Routes>
      </NativeRouter>
    );

    await act(async () => {
      await new Promise(resolve => setImmediate(resolve));
    });
  });

  it("should render with correct styling and src", async () => {
    const json = router.toJSON();
    const icon = router.toJSON().children[0].children[0];

    expect(json.props.style).toStrictEqual(style);
    expect(icon.props.style).toStrictEqual(iconStyle);
    expect(icon.props.source).toBeTruthy();
  });

  it("should call callback when clicked", () => {
    // todo To be implemented
    expect(0).toBe(0);
  });
});