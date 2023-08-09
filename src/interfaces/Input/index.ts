// React-hook-form
import { UseFormRegister, Path, RegisterOptions } from "react-hook-form";

// Interfaces
import { TFormValues } from "../../interfaces/HomePage";

export interface IInputProps {
  register: UseFormRegister<TFormValues>;
  isLoading: boolean;
  name: Path<TFormValues>;
  rules: RegisterOptions;
}
