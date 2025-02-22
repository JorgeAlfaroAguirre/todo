import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

// type Props = {};

const TodoForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="taskName"> Tarea </Input>
        <Input name="taskDetail"> Detalle </Input>
        <Input name="person"> Persona </Input>
        <Input name="date" type="date">
          {" "}
          Fecha{" "}
        </Input>
        <Button variant="warning">Enviar</Button>
      </form>
    </FormProvider>
  );
};

export default TodoForm;
