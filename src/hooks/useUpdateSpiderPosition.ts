import { Events, Game } from "../config";
import { Boundary } from "../game/Boundary";
import { Spider } from "../types";
import { Events as EventsArray } from "../types";

const board = [
  [ - Game.Border - Game.SpiderSize,  - Game.Border - Game.SpiderSize],
  [Game.Width - Game.Border - Game.SpiderSize, - Game.Border - Game.SpiderSize],
  [Game.Width - Game.Border - Game.SpiderSize, Game.Height - Game.Border - Game.SpiderSize],
  [ - Game.Border - Game.SpiderSize, Game.Height - Game.Border - Game.SpiderSize]
];
const initialBoundary = new Boundary(board);

export const useUpdateSpiderPosition = (spider: Spider, events: EventsArray) => {
  const x = spider.position[0];
  const y = spider.position[1];
  let newX = x;
  let newY = y;

  if (events.length) {
    for (const event of events) {
      switch (event.type) {
        case Events.Up:
          newY = (initialBoundary.isPointInside(x, y - Game.SpiderSpeed))
            ? y - Game.SpiderSpeed
            : y;
          break;
        case Events.Down:
          newY = (initialBoundary.isPointInside(x, y + Game.SpiderSpeed))
            ? y + Game.SpiderSpeed
            : y;
          break;
        case Events.Left:
          newX = (initialBoundary.isPointInside(x - Game.SpiderSpeed, y))
            ? x - Game.SpiderSpeed
            : x;
          break;
        case Events.Right:
          newX = (initialBoundary.isPointInside(x + Game.SpiderSpeed, y))
            ? x + Game.SpiderSpeed
            : x;
          break;
      }
    }
  }
  
  return { newX, newY };
};