import type { Rect, ConnectionPoint } from '../src/dataConverter';
import { dataConverter } from '../src/dataConverter';

it("прямая горизонтальня линия из двух точек при валидных соединениях", () => {
  const rect1: Rect = {
    position: { x: 200, y: 200 },
    size: { width: 100, height: 100 }
  };

  const rect2: Rect = {
    position: { x: -200, y: 200 },
    size: { width: 100, height: 100 }
  };

  const conn1: ConnectionPoint = {
    point: { x: 100, y: 200 },
    angle: 180
  };

  const conn2: ConnectionPoint = {
    point: { x: -100, y: 200 },
    angle: 0
  };

  const result = dataConverter(rect1, rect2, conn1, conn2);

  expect(result).toEqual([
    { x: 100, y: 200 },
    { x: -100, y: 200 },
  ]);
});


it("простроение ломаной линии, если соединения под углом", () => {
  const rect1: Rect = {
    position: { x: 200, y: 200 },
    size: { width: 100, height: 100 }
  };

  const rect2: Rect = {
    position: { x: -200, y: -200 },
    size: { width: 100, height: 100 }
  };

  const conn1: ConnectionPoint = {
    point: { x: 200, y: 100 },
    angle: 270
  };

  const conn2: ConnectionPoint = {
    point: { x: -200, y: -100 },
    angle: 90
  };

  const result = dataConverter(rect1, rect2, conn1, conn2);
  expect(result.length).toBeGreaterThan(2);
});
