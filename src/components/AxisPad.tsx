import React, { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";

/**
 * Axis pad props
 *
 * autoCenterPad    auto centres pad on touch event start
 * isOrthogonalPad  if true it changes the pad to work only in 2 directions and handler having only 5 positions (up, down, left, right, idle)
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
  isOrthogonalPad?: boolean,
  size?: number,
  handlerSize?: number,
  step?: number,
  onValue: (object: {x: number, y: number}) => void,
  freezeOnRelease?: boolean,
  wrapperStyle?: object,
  handlerStyle?: object,
  children?: ReactNode
}

const ANIMATION_DURATION_PAD = 300;
const ANIMATION_DURATION = 50;

const AxisPad: FunctionComponent<Props> = (props) => {
  const animatedPadX = useRef(new Animated.Value(0));
  const animatedPadY = useRef(new Animated.Value(0));
  const animatedX = useRef(new Animated.Value(0));
  const animatedY = useRef(new Animated.Value(0));
  const wrapperElement = useRef(null);
  const handlerElement = useRef(null);
  const [ identifier, setIdentifier ] = useState(0);
  const [ x, setX ] = useState(0);
  const [ y, setY ] = useState(0);
  const [ padX, setPadX ] = useState(0);
  const [ padY, setPadY ] = useState(0);
  const [ onReleaseX, setOnReleaseX ] = useState(0);
  const [ onReleaseY, setOnReleaseY ] = useState(0);
  const [ touchX, setTouchX ] = useState(0);
  const [ touchY, setTouchY ] = useState(0);

  const {
    autoCenterPad,
    freezeOnRelease,
    handlerSize,
    isOrthogonalPad,
    onValue,
    size,
    step
  } = props;

  useEffect(() => {
    animatePad(padX, padY);
  }, [padX, padY]);

  useEffect(() => {
    animate(x, y);
  }, [x, y]);

  const animatePad = (padX, padY) => {
    Animated.timing(
      animatedPadX.current,
      {
        duration: ANIMATION_DURATION_PAD,
        easing: Easing.elastic(1),
        toValue: padX,
        useNativeDriver: true
      }
    ).start();
    Animated.timing(
      animatedPadY.current,
      {
        duration: ANIMATION_DURATION_PAD,
        easing: Easing.elastic(1),
        toValue: padY,
        useNativeDriver: true
      }
    ).start();
  };

  const animate = (x, y) => {
    Animated.timing(
      animatedX.current,
      {
        duration: ANIMATION_DURATION,
        easing: Easing.out(Easing.exp),
        toValue: x,
        useNativeDriver: true
      }
    ).start();
    Animated.timing(
      animatedY.current,
      {
        duration: ANIMATION_DURATION,
        easing: Easing.out(Easing.exp),
        toValue: y,
        useNativeDriver: true
      }
    ).start();
  };

  const limitCoordinatesForOrthogonalPad = (handlerX, handlerY) => {
    const relativeX = handlerX / size * 2;
    const relativeY = handlerY / size * 2;
    const radius = Math.pow(relativeX * relativeX + relativeY * relativeY, 0.5);
    const relativeMaxRadius = 1 - handlerSize / size;

    if (radius <= relativeMaxRadius * 0.60) { // 60% of max radius, move to constants
      return {
        x: 0,
        y: 0
      };
    }
    const signX = Math.sign(relativeX);
    const signY = Math.sign(relativeY);
    const angle = Math.atan(Math.abs(relativeY/relativeX)) * 180 / Math.PI;

    if (angle <= 45) {
      return {
        x: signX * relativeMaxRadius * size / 2,
        y: 0
      };
    } else {
      return {
        x: 0,
        y: signY * relativeMaxRadius * size / 2
      };
    }
  };

  const limitCoordinates = (handlerX, handlerY) => {
    const relativeX = handlerX / size * 2;
    const relativeY = handlerY / size * 2;
    const relativeRadius = Math.pow(relativeX * relativeX + relativeY * relativeY, 0.5);
    const relativeMaxRadius = 1 - handlerSize / size;

    const stepped = (relativeCoordinate) => step
      ? Math.floor(relativeCoordinate / step) * step
      : relativeCoordinate;

    const limited = (relativeCoordinate, relativeRadius) => {
      const limit = relativeMaxRadius * Math.abs(relativeCoordinate) / relativeRadius;

      return Math.min(limit, Math.max(-limit, relativeCoordinate));
    };

    return {
      x: stepped(limited(relativeX, relativeRadius)) * size / 2,
      y: stepped(limited(relativeY, relativeRadius)) * size / 2
    };
  };

  const sendValue = (x, y) => {
    onValue(
      {
        x: x / size * 2,
        y: y / size * 2
      }
    );
  };

  const centerPad = (pageX, pageY) => {
    handlerElement.current.measure((fx, fy, width, height, x, y) => {
      const padX = pageX - x - width / 2;
      const padY = pageY - y - height / 2;

      setPadX(padX);
      setPadY(padY);
    });
  };

  const getTouchPoint = (touches, identifier) => {
    let touchItem = null;

    touches.map((item) => {
      if (item.identifier === identifier) {
        touchItem = item;
      }
    });

    return touchItem;
  };

  const onTouchStart = event => {
    const identifier = event.nativeEvent.identifier;
    const touchItem = getTouchPoint(event.nativeEvent.touches, identifier);

    if (typeof identifier === "number" && touchItem) {
      const { pageX, pageY } = touchItem;

      if (autoCenterPad) {
        centerPad(pageX, pageY);
      }

      sendValue(x, y);
      setIdentifier(identifier);
      setTouchX(pageX);
      setTouchY(pageY);
    }
  };

  const onTouchMove = event => {
    const touchItem = getTouchPoint(event.nativeEvent.touches, identifier);
    if (touchItem) {
      const { pageX, pageY } = touchItem;

      const newX = pageX - touchX + onReleaseX;
      const newY = pageY - touchY + onReleaseY;

      let limitedCoordinates;

      if (isOrthogonalPad) {
        limitedCoordinates = limitCoordinatesForOrthogonalPad(newX, newY);
      } else {
        limitedCoordinates = limitCoordinates(newX, newY);
      }
      const { x, y } = limitedCoordinates;

      if (!isNaN(x) && !isNaN(y)) {
        sendValue(x, y);
        setX(x);
        setY(y);
      }
    }
  };

  const onTouchEnd = () => {
    let onReleaseX = x;
    let onReleaseY = y;
    if (!freezeOnRelease) {
      setX(0);
      setY(0);
      onReleaseX = 0;
      onReleaseY = 0;
    }
    setOnReleaseX(onReleaseX);
    setOnReleaseY(onReleaseY);
    sendValue(onReleaseX, onReleaseY);
    setPadX(0);
    setPadY(0);
    setTouchX(0);
    setTouchY(0);
  };

  const onTouchCancel = () => {
    setPadX(0);
    setPadY(0);
  };

  return (
    <Animated.View onTouchStart={onTouchStart}
                   onTouchEnd={onTouchEnd}
                   onTouchCancel={onTouchCancel}
                   onTouchMove={onTouchMove}
                   style={[AxisPadStyle.wrapper, props.wrapperStyle ? props.wrapperStyle : {}, {
                     height: size,
                     transform: [{
                       translateX: animatedPadX.current
                     }, {
                       translateY: animatedPadY.current
                     }],
                     width: size
                   }]}
                   ref={ref => wrapperElement.current = ref}>
      <Animated.View
        ref={ref => handlerElement.current = ref}
        style={[AxisPadStyle.handler, props.handlerStyle ? props.handlerStyle : {}, {
          height: handlerSize,
          transform: [{
            translateX: x
          }, {
            translateY: y
          }],
          width: handlerSize
        }]}>
        {props.children}
      </Animated.View>
    </Animated.View>
  );
};

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

AxisPad.defaultProps = {
  handlerSize: 100,
  size: 300,
  step: 0
};

export default AxisPad;