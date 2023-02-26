import { FunctionComponent } from "react";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";

interface Props {
  handlePressIn: () => void,
  handlePressOut: () => void,
  imgStyle?: object,
  src: ImageSourcePropType,
  style?: object,
}

const ArrowControlsButton: FunctionComponent<Props> = (props) => {
  const {
    handlePressIn,
    handlePressOut,
    imgStyle,
    src,
    style
  } = props;

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={style}
      activeOpacity={0.85}
    >
      <Image source={src} style={imgStyle} />
    </TouchableOpacity>
  );
};

export default ArrowControlsButton;