import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";

type Props = {};

const AddPerson = (props: Props) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="taskName"> Tarea </Input>
        <Button variant="warning">Enviar</Button>
      </form>
    </FormProvider>
  );
};

export default AddPerson;
