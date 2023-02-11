import React from "react";
import { render } from "@testing-library/react-native";

import { Images } from "../../config";
import Image from "../Image";

describe("Image", () => {
  const style = {
    position: "absolute",
    right: 0,
    top: 0
  };
  const imgStyle = {
    height: 100,
    resizeMode: "contain",
    width: 100
  };

  it("should render with correct styling and src", async () => {
    const wrapper = render(<Image src={Images.MenuWeb} style={style} imgStyle={imgStyle} />);

    const json = wrapper.toJSON();
    const image = json.children[0];

    expect(json.props.style).toStrictEqual(style);
    expect(image.props.style).toStrictEqual(imgStyle);
    expect(image.props.source).toBeTruthy();
  });
});