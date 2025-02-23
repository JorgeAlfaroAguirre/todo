import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Task, taskSchema } from "../schemas/Task";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";
import { Asignee } from "../schemas/Asignee";

type Props = {
  onSubmit: (task: Task) => void;
  asigneeOptions: Asignee[];
};

const TodoForm = ({ onSubmit, asigneeOptions }: Props) => {
  const methods = useForm<Task>({
    resolver: zodResolver(taskSchema(asigneeOptions)),
  });

  const onSubmitFixedDate = (data: Task) => {
    const formattedData = {
      ...data,
      date: new Date(data.date).toLocaleDateString("es-ES"),
    };

    console.log(formattedData);
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitFixedDate)}>
        <Input name="taskName"> Tarea </Input>
        <Input name="taskDetail"> Detalle </Input>
        <Select
          options={asigneeOptions}
          defaultMessage={"--Selecciona A la persona--"}
          label={"Tipo"}
          name={"asignee"}
        ></Select>
        <Input name="date" type="date">
          Fecha
        </Input>
        <Button variant="warning">Enviar</Button>
      </form>
    </FormProvider>
  );
};

export default TodoForm;
