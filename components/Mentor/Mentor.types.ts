import { StaticImageData } from "next/image";

import { HTMLAttributes } from "react";

export interface MentorProps extends HTMLAttributes<HTMLElement> {
  photo: StaticImageData;
  name: string;
  post: string;
}
