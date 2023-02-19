import { useEffect, useRef, useState } from "react";

import { Events } from "../config";
import { EngineInterface } from "../types/engineInterface";

const MOVE_TIMEOUT = 60;

export const useControls = (engine: EngineInterface) => {
  const moveTimeout = useRef(null);

  const clearMoveTimeout = () => {
    clearTimeout(moveTimeout.current);
    moveTimeout.current = null;
  };

  const setMoveTimeout = (event: object) => {
    moveTimeout.current = setTimeout(() => {
      engine.dispatchEvent(event);
      setMoveTimeout(event);
    }, MOVE_TIMEOUT);
  };

  const handleUp = () => {
    engine.dispatchEvent({ type: Events.Up });
    setMoveTimeout({ type: Events.Up });
  };

  const handleDown = () => {
    engine.dispatchEvent({ type: Events.Down });
    setMoveTimeout({ type: Events.Down });
  };

  const handleLeft = () => {
    engine.dispatchEvent({ type: Events.Left });
    setMoveTimeout({ type: Events.Left });
  };

  const handleRight = () => {
    engine.dispatchEvent({ type: Events.Right });
    setMoveTimeout({ type: Events.Right });
  };

  const handleRelease = () => {
    clearMoveTimeout();
  };

  return {
    handleDown,
    handleLeft,
    handleRelease,
    handleRight,
    handleUp
  };
};