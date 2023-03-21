import { useUpdateSpiderPosition } from "../hooks/useUpdateSpiderPosition";
import { Snake, Spider } from "../types";



export const GameLoop = (entities, { touches, dispatch, events }) => {
  const snake: Snake = entities.snake;
  const spider: Spider = entities.spider;

  const { newX, newY } = useUpdateSpiderPosition(spider, events);
  spider.position[0] = newX;
  spider.position[1] = newY;

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