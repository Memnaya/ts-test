import type { Rect, ConnectionPoint } from '../src/dataConverter';
import { isConnectionValid } from '../src/utils/isConnectionValid';

describe("isConnectionValid — базовые проверки", () => {
  const rect: Rect = {
    position: { x: 4, y: 4 },
    size: { width: 4, height: 2 },
  };

  it("корректные соединения", () => {
    const right: ConnectionPoint = { point: { x: 6, y: 4 }, angle: 0 };
    const bottom: ConnectionPoint = { point: { x: 3, y: 3 }, angle: 270 };
    const left: ConnectionPoint = { point: { x: 2, y: 5 }, angle: 180 };
    const top: ConnectionPoint = { point: { x: 5, y: 5 }, angle: 90 };

    expect(isConnectionValid(rect, right)).toBe(true);
    expect(isConnectionValid(rect, bottom)).toBe(true);
    expect(isConnectionValid(rect, left)).toBe(true);
    expect(isConnectionValid(rect, top)).toBe(true);
  });

  it("некорректные соединения", () => {
    const inside: ConnectionPoint = { point: { x: 6, y: 4 }, angle: 0 };
    const wrongAngle: ConnectionPoint = { point: { x: 3, y: 3 }, angle: 90 };
    const outOfRange: ConnectionPoint = { point: { x: 6, y: 7 }, angle: 0 };

    expect(isConnectionValid(rect, inside)).toBe(false);
    expect(isConnectionValid(rect, wrongAngle)).toBe(false);
    expect(isConnectionValid(rect, outOfRange)).toBe(false);
  });
});



