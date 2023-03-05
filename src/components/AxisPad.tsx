import React, { ReactNode } from "react";
import { Animated, Easing, View } from "react-native";
import Value = Animated.Value;

/**
 * Axis pad props
 *
 * autoCenterPad    auto centres pad on touch event start
 * size             pad size
 * handlerSize      size of the handler
 * step             defines a step in which handler can change its position on the pad
 * onValue          a callback from props that is fired on touch start, end and move as a parameters it takes an object with x and y coordinates of the handler
 * freezeOnRelease  defines if the handler should be frozen in place after releasing and not reset to initial position
 * wrapperStyle     style of the pad
 * handlerStyle     style of the handler
 * children         components that can be passed in props
 */
interface Props {
  autoCenterPad?: boolean,
  size?: number,
  handlerSize?: number,
  step?: number,
  onValue: (object: {x: number, y: number}) => void,
  freezeOnRelease?: boolean,
  wrapperStyle?: object,
  handlerStyle?: object,
  children?: ReactNode
}

/**
 * Axis pad state interface
 *
 * identifier         event identifier
 * padX               x coordinate of the centre of the pad. If 0 then pad is in initial position on x-axis. This is used when autoCenterPad is true.
 * padY               y coordinate of the centre of the pad. If 0 then pad is in initial position on y-axis. This is used when autoCenterPad is true.
 * touchX             x coordinate of the touch event. This is relative to the screen.
 * touchY             y coordinate of the touch event. This is relative to the screen.
 * x                  coordinate (x) of the centre of the handler. If 0 then pad is in the centre of the pad on x-axis.
 * y                  coordinate (y) of the centre of the handler. If 0 then pad is in the centre of the pad on y-axis.
 * onReleaseX         x coordinate of the centre of the handler when touch event finished. If 0, then handler returns to initial position on x-axis.
 * onReleaseY         y coordinate of the centre of the handler when touch event finished. If 0, then handler returns to initial position on y-axis.
 * width              pad width
 * height             pad height
 * handler            diameter of the handler
 * step               defines a step in which handler can change its position on the pad
 */
interface State {
  identifier: number,
  padX: number,
  padY: number,
  touchX: number,
  touchY: number,
  x: number,
  y: number,
  onReleaseX: number,
  onReleaseY: number,
  width: number,
  height: number,
  handler: number,
  step: number
}

class AxisPad extends React.Component<Props, State> {
  animatedPadX: Value;
  animatedPadY: Value;
  animatedX: Value;
  animatedY: Value;
  wrapperElement: Animated.LegacyRef<View> | View;
  private handlerElement: Animated.LegacyRef<View> | View;

  constructor(props: Props) {
    super(props);
    this.animatedPadX = new Animated.Value(0);
    this.animatedPadY = new Animated.Value(0);
    this.animatedX = new Animated.Value(0);
    this.animatedY = new Animated.Value(0);

    this.state = {
      handler: props.handlerSize ? props.handlerSize : 100,
      height: props.size ? props.size : 300,
      identifier: 0,
      onReleaseX: 0,
      onReleaseY: 0,
      padX: 0,
      padY: 0,
      step: props.step ? props.step : 0,
      touchX: 0,
      touchY: 0,
      width: props.size ? props.size : 300,
      x: 0,
      y: 0
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
      this.animatedPadX,
      {
        duration: 300,
        easing: Easing.elastic(1),
        toValue: this.state.padX,
        useNativeDriver: true
      }
    ).start();
    Animated.timing(
      this.animatedPadY,
      {
        duration: 300,
        easing: Easing.elastic(1),
        toValue: this.state.padY,
        useNativeDriver: true
      }
    ).start();
  }

  animate() {
    Animated.timing(
      this.animatedX,
      {
        duration: 50,
        easing: Easing.out(Easing.exp),
        toValue: this.state.x,
        useNativeDriver: true
      }
    ).start();
    Animated.timing(
      this.animatedY,
      {
        duration: 50,
        easing: Easing.out(Easing.exp),
        toValue: this.state.y,
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
    (this.handlerElement as View).measure((fx, fy, width, height, x, y) => {
      const padX = pageX - x - width / 2;
      const padY = pageY - y - height / 2;
      this.setState({
        padX,
        padY
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

      if (this.props.autoCenterPad) {
        this.centerPosition(pageX, pageY);
      }

      this.sendValue(this.state.x, this.state.y);
      this.setState({
        identifier,
        touchX: pageX,
        touchY: pageY
      });
    }
  }

  onTouchMove(evt) {
    const touchItem = this.getTouchPoint(evt.nativeEvent.touches, this.state.identifier);
    if (touchItem) {
      const { pageX, pageY } = touchItem;

      const handlerXStatic = pageX - this.state.touchX + this.state.onReleaseX;
      const handlerYStatic = pageY - this.state.touchY + this.state.onReleaseY;

      const x = this.limiter(handlerXStatic, handlerYStatic);
      const y = this.limiter(handlerYStatic, handlerXStatic);
      if (x && y) {
        this.sendValue(x, y);
        this.setState({ x, y }, this.animate);
      }
    }
  }

  onTouchEnd() {
    let { x, y } = this.state;
    if (!this.props.freezeOnRelease) {
      x = 0;
      y = 0;
    }
    const onReleaseX = x;
    const onReleaseY = y;
    this.sendValue(x, y);
    this.setState({
      onReleaseX,
      onReleaseY,
      padX: 0,
      padY: 0,
      touchX: 0,
      touchY: 0,
      x,
      y
    }, () => {
      this.centerAnimate();
      this.animate();
    });
  }

  onTouchCancel() {
    this.setState({
      padX: 0,
      padY: 0
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
                         translateX: this.animatedPadX
                       }, {
                         translateY: this.animatedPadY
                       }],
                       width: this.state.width
                     }]}
                     ref={view => { this.wrapperElement = view; }}>
        <Animated.View
          ref={view => { this.handlerElement = view; }}
          style={[AxisPadStyle.handler, this.props.handlerStyle ? this.props.handlerStyle : {}, {
            height: this.state.handler,
            transform: [{
              translateX: this.state.x
            }, {
              translateY: this.state.y
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