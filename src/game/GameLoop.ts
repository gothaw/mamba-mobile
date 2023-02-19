import { Game } from "../config";

import { Boundary } from "./Boundary";

export const GameLoop = (entities, { touches, dispatch, events }) => {
  const snake = entities.snake;
  const spider = entities.spider;
  const board = [[0, 0], [Game.Width - 15 - 4 - 4, 0], [Game.Width - 15 - 4 - 4, Game.Height - 15 - 4 - 4], [0, Game.Height - 15 - 4 - 4]];
  const gameBoundary = new Boundary(board);

  if (events.length) {
    for (const event of events) {
      switch (event.type) {
        case "up":
          spider.position[1] = spider.position[1] - 4;
          break;
        case "down":
          spider.position[1] = spider.position[1] + 4;
          break;
        case "left":
          spider.position[0] = spider.position[0] - 4;
          break;
        case "right":
          spider.position[0] = spider.position[0] + 4;
          break;
      }
    }
  }

  // const newX = snake.position[0] + snake.speedX;
  // const newY = snake.position[1] + snake.speedY;

  // todo This is just spike code
  // if (gameBoundary.isPointInside(newX, newY)) {
  //   snake.position[0] = newX;
  //   snake.position[1] = newY;
  // } else {
  //   snake.speedX = -snake.speedX;
  //   snake.speedY += 0.2;
  //
  //   if (snake.speedY >= 1) {
  //     snake.speedY = -0.2;
  //   }
  // }

  return entities;
};