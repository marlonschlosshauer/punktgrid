import { GRID_HEIGHT, GRID_WIDTH } from "./constants";

export const cordsToDots = (
  cords: [number, number][],
  width = GRID_WIDTH,
  height = GRID_HEIGHT
) => {
  // Build grid
  const grid = Array.from({ length: width }).map(() =>
    Array.from({ length: height }).map(() => 0)
  );

  // Add dots to grid
  cords.forEach(([x, y]) => {
    grid[x][y] = 1;
  });

  return grid;
};
