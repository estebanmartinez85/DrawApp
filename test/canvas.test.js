
import { canvas } from "../js/canvas.js";

describe('canvas test', () => {
  let w = 5, h = 5;

  test('Takes Two Arguments', () => {
    expect(() => { canvas(); }).toThrow();
    expect(() => { canvas(w); }).toThrow();
    expect(() => { canvas(w,h); }).not.toThrow();
  });

  test('Returns HTMLCanvasElement', () => {
    expect(canvas(w,h)).toBeInstanceOf(HTMLCanvasElement);
  });

  test('Is correct size', () => {
    let c = canvas(w,h);
    expect(c.width).toBe(w);
    expect(c.height).toBe(h);
  });
});