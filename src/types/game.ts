import React from "react";

type Event = { type: string }
export type Events = Event[]

export interface Spider {
  position: [number, number],
  renderer: React.ReactNode
  speedX: number,
  speedY: number
}

export interface Snake {
  position: [number, number],
  renderer: React.ReactNode
  speedX: number,
  speedY: number
}

export interface Entities {
  snake: Snake,
  spider: Spider
}