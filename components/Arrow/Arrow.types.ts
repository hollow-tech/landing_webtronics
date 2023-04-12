export interface ArrowProps {
  direction: Directions;
  change: (value: Directions) => void;
}

export enum Directions {
  Left = "left",
  Right = "right",
}
