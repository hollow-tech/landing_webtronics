export interface ButtonProps {
  content: string;
  type?: ButtonTypes;
  disabled?: boolean;
}

export enum ButtonTypes {
  Standard = "button",
  Submit = "submit",
  Reset = "reset",
}
