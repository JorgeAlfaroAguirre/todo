import { useFormContext } from "react-hook-form";
import { Asignee } from "../schemas/Asignee";

type Props = {
  options: Asignee[];
  defaultMessage: string;
  label: string;
  name: string;
};

const Select = ({ options, defaultMessage, label, name }: Props) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        {...register(name)}
        className="form-select"
        aria-label="Default select example"
      >
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o.email} value={JSON.stringify(o)}>
            {o.name}
          </option>
        ))}
      </select>
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  );
};

export default Select;
