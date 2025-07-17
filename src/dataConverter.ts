type Point = {
  x: number;
  y: number;
};
type Size = {
  width: number;
  height: number;
};
type Rect = {
  position: Point; // координата центра прямоугольника
  size: Size;
};
type ConnectionPoint = {
  point: Point;
  angle: number; // угол в градусах
};

const dataConverter = (
  rect1: Rect, 
  rect2: Rect, 
  cPoint1: ConnectionPoint, 
  cPoint2: ConnectionPoint
): Point[] => {
  return [{x: 1, y: 2}]
};

export {dataConverter};
export type {Point, Size, Rect, ConnectionPoint};