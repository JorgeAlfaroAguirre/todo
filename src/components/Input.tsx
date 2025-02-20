import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  children: ReactNode;
  type?: string;
};

const Input = ({ name, children, type = "text" }: Props) => {
  const { register } = useFormContext();
  return (
    <>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {children}
        </label>
      </div>
      <input
        {...register(name)}
        type={type}
        className="form-control"
        id={name}
      ></input>
    </>
  );
};

export default Input;
