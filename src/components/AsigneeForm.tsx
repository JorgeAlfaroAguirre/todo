import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import { Asignee } from "../schemas/Asignee";

type Props = {
  onSubmit: (asignee: Asignee) => void;
};

const AsigneeForm = ({ onSubmit }: Props) => {
  const methods = useForm<Asignee>();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => onSubmit(data))}>
        <Input name="name"> Tarea </Input>
        <Input name="email">Correo</Input>
        <Button variant="warning">Enviar</Button>
      </form>
    </FormProvider>
  );
};

export default AsigneeForm;
