import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";

// type Props = {};

const TodoForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name"> Tarea </Input>
        <Input name="person"> Persona </Input>
        <Input name="date" type="date">
          {" "}
          Fecha{" "}
        </Input>
        <button>Enviar</button>
      </form>
    </FormProvider>
  );
};

export default TodoForm;
