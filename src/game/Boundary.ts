export class Boundary {
  private readonly coordinates: number[][];

  constructor(coordinates: number[][]) {
    this.coordinates = coordinates;
  }

  isPointInside(x: number, y: number): boolean {
    // todo Implement this method. For now it checks if it's inside the initial
    const maxX = this.coordinates[2][0];
    const maxY = this.coordinates[2][1];

    return x >= 0 && x <= maxX && y >= 0 && y <= maxY;
  }

  getCoordinates(): number[][] {
    return this.coordinates;
  }
}