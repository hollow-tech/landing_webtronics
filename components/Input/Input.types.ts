import { Path, UseFormRegister } from "react-hook-form";
import { IFormInput } from "../../pageComponents/Webtronics/sections/ContactUs/ContactUs.types";

export interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  register: UseFormRegister<IFormInput>;
  value: Path<IFormInput>;
}
