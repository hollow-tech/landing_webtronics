import { StaticImageData } from "next/image";

export enum Directions {
  Left = "left",
  Right = "right",
}

export interface IPerson {
  id: number;
  main_photo: string;
  alt_photo: string;
  title: string;
  description: string;
}
