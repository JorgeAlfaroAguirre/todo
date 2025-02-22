import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Task, taskSchema } from "../schemas/Task";
import { zodResolver } from "@hookform/resolvers/zod";

// type Props = {};

const TodoForm = () => {
  const methods = useForm<Task>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: Task) => {
    const formattedData = {
      ...data,
      date: new Date(data.date).toLocaleDateString("es-ES"),
    };

    console.log(formattedData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="taskName"> Tarea </Input>
        <Input name="taskDetail"> Detalle </Input>
        <Input name="person"> Persona </Input>
        <Input name="date" type="date">
          Fecha
        </Input>
        <Button variant="warning">Enviar</Button>
      </form>
    </FormProvider>
  );
};

export default TodoForm;
