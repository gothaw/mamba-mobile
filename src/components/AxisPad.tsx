import React, { ReactNode } from "react";
import { Animated, Easing, View } from "react-native";
import Value = Animated.Value;

interface Props {
  autoCenter?: boolean,
  size?: number,
  handlerSize?: number,
  step?: number,
  onValue: (object) => void,
  resetOnRelease?: boolean,
  wrapperStyle?: object,
  handlerStyle?: object,
  children?: ReactNode
}

interface State {
  identifier: number,
  cx: number,
  cy: number,
  sx: number,
  sy: number,
  px: number,
  py: number,
  dx: number,
  dy: number,
  width: number,
  height: number,
  handler: number,
  step: number
}

class AxisPad extends React.Component<Props, State> {
  anim_cx: Value;
  anim_cy: Value;
  anim_px: Value;
  anim_py: Value;
  wrapperElement: Animated.LegacyRef<View> | View;
  private handlerElement: Animated.LegacyRef<View> | View;

  constructor(props: Props) {
    super(props);
    this.anim_cx = new Animated.Value(0);
    this.anim_cy = new Animated.Value(0);
    this.anim_px = new Animated.Value(0);
    this.anim_py = new Animated.Value(0);

    this.state = {
      cx: 0,
      cy: 0,
      dx: 0,
      dy: 0,
      handler: props.handlerSize ? props.handlerSize : 100,
      height: props.size ? props.size : 300,
      identifier: 0,
      px: 0,
      py: 0,
      step: props.step ? props.step : 0,
      sx: 0,
      sy: 0,
      width: props.size ? props.size : 300
    };

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.limiter = this.limiter.bind(this);
    this.sendValue = this.sendValue.bind(this);
    this.centerPosition = this.centerPosition.bind(this);
    this.animate = this.animate.bind(this);
    this.centerAnimate = this.centerAnimate.bind(this);
  }

  centerAnimate() {
    Animated.timing(
      this.anim_cx,
      {
        duration: 300,
        easing: Easing.elastic(1),
        toValue: this.state.cx,
        useNativeDriver: true
      }
    ).start();
    Animated.timing(
      this.anim_cy,
      {
        duration: 300,
        easing: Easing.elastic(1),
        toValue: this.state.cy,
        useNativeDriver: true
      }
    ).start();
  }

  animate() {
    Animated.timing(
      this.anim_px,
      {
        duration: 50,
        easing: Easing.out(Easing.exp),
        toValue: this.state.px,
        useNativeDriver: true
      }
    ).start();
    Animated.timing(
      this.anim_py,
      {
        duration: 50,
        easing: Easing.out(Easing.exp),
        toValue: this.state.py,
        useNativeDriver: true
      }
    ).start();
  }

  limiter(inputMain, inputSec) {
    const { handler, width, step } = this.state;
    const minimisedMain = inputMain / width * 2;
    const minimisedSec = inputSec / width * 2;
    const tangent = Math.pow(minimisedMain * minimisedMain + minimisedSec * minimisedSec, 0.5);
    const maxRadiusUnified = 1 - handler / width;

    const stepped = (x) => step ? Math.floor(x / step) * step : x;
    const limited = (x, tangent) => {
      const limit = maxRadiusUnified * Math.abs(x) / tangent;

      return Math.min(limit, Math.max(-limit, x));
    };
    return stepped(limited(minimisedMain, tangent)) * width / 2;
  }

  sendValue(x, y) {
    const { width } = this.state;
    this.props.onValue && this.props.onValue({ x: x / width * 2, y: y / width * 2 });
  }

  centerPosition(pageX, pageY) {
    (this.handlerElement as View).measure((fx, fy, width, height, px, py) => {
      const cx = pageX - px - width / 2;
      const cy = pageY - py - height / 2;
      this.setState({
        cx,
        cy
      }, this.centerAnimate);
    });
  }

  getTouchPoint(touches, identifier) {
    let touchItem = null;

    touches.map((item) => {
      if (item.identifier === identifier) {
        touchItem = item;
      }
    });

    return touchItem;
  }

  onTouchStart(evt) {
    const identifier = evt.nativeEvent.identifier;
    const touchItem = this.getTouchPoint(evt.nativeEvent.touches, identifier);

    if (typeof identifier === "number" && touchItem) {
      const { pageX, pageY } = touchItem;

      if (this.props.autoCenter) {
        this.centerPosition(pageX, pageY);
      }

      this.sendValue(this.state.px, this.state.py);
      this.setState({
        identifier,
        sx: pageX,
        sy: pageY
      });
    }
  }

  onTouchMove(evt) {
    const touchItem = this.getTouchPoint(evt.nativeEvent.touches, this.state.identifier);
    if (touchItem) {
      const { pageX, pageY } = touchItem;

      const pxStatic = pageX - this.state.sx + this.state.dx;
      const pyStatic = pageY - this.state.sy + this.state.dy;

      const px = this.limiter(pxStatic, pyStatic);
      const py = this.limiter(pyStatic, pxStatic);
      if (px && py) {
        this.sendValue(px, py);
        this.setState({ px, py }, this.animate);
      }
    }
  }

  onTouchEnd() {
    let { px, py } = this.state;
    if (this.props.resetOnRelease) {
      px = 0;
      py = 0;
    }
    const dx = px;
    const dy = py;
    this.sendValue(px, py);
    this.setState({
      cx: 0,
      cy: 0,
      dx,
      dy,
      px,
      py,
      sx: 0,
      sy: 0
    }, () => {
      this.centerAnimate();
      this.animate();
    });
  }

  onTouchCancel() {
    this.setState({
      cx: 0,
      cy: 0
    }, this.centerAnimate);
  }

  render() {
    return (
      <Animated.View onTouchStart={this.onTouchStart}
                     onTouchEnd={this.onTouchEnd}
                     onTouchCancel={this.onTouchCancel}
                     onTouchMove={this.onTouchMove}
                     style={[AxisPadStyle.wrapper, this.props.wrapperStyle ? this.props.wrapperStyle : {}, {
                       height: this.state.height,
                       transform: [{
                         translateX: this.anim_cx
                       }, {
                         translateY: this.anim_cy
                       }],
                       width: this.state.width
                     }]}
                     ref={view => { this.wrapperElement = view; }}>
        <Animated.View
          ref={view => { this.handlerElement = view; }}
          style={[AxisPadStyle.handler, this.props.handlerStyle ? this.props.handlerStyle : {}, {
            height: this.state.handler,
            transform: [{
              translateX: this.state.px
            }, {
              translateY: this.state.py
            }],
            width: this.state.handler
          }]}>
          {this.props.children}
        </Animated.View>
      </Animated.View>
    );
  }
}

const AxisPadStyle =  {
  handler: {
    alignItems: "center",
    backgroundColor: "#00000066",
    borderRadius: 300,
    height: "60%",
    justifyContent: "center",
    width: "60%"
  },
  wrapper: {
    alignItems: "center",
    backgroundColor: "#00000033",
    borderRadius: 300,
    height: 300,
    justifyContent: "center",
    width: 300
  }
};

export default AxisPad;