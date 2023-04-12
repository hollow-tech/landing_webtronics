export interface StepItemProps {
  direction: Directions;
  number: number;
  title: string;
  description: string;
}

export enum Directions {
  Left = "left",
  Right = "right",
}
