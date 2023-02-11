import React from "react";
import { render } from "@testing-library/react-native";

import { Images } from "../../config";
import Image from "../Image";

describe("Image", () => {
  const style = {
    position: "absolute",
    top: 0,
    right: 0
  };
  const imgStyle = {
    width: 100,
    height: 100,
    resizeMode: "contain"
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