export interface Vector2 {
  x: number;
  y: number;
}

export type HandleState = "chilling" | "hovering" | "dragging";

export interface Handle {
  state: HandleState;
  position: Vector2;
  size: number;
}
