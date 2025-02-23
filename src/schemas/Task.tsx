import { z } from "zod";
import { Asignee } from "./Asignee"; // Importamos el tipo Asignee

export const taskSchema = (asigneeOptions: Asignee[]) =>
  z.object({
    taskName: z
      .string()
      .min(1, { message: "La tarea no puede estar vacía" })
      .min(5, { message: "Longitud mínima 5 caracteres" }),
    taskDetail: z
      .string()
      .min(1, { message: "El detalle no puede estar vacío" })
      .min(5, { message: "Longitud mínima 5 caracteres" }),
    // asignee: z
    //   .string()
    //   .refine((option) => asigneeOptions.some((a) => a.name === option), {
    //     message: "Selecciona una persona de la lista válida",
    //   }),
    date: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Debe ser una fecha válida",
      })
      .transform((val) => new Date(val)),
  });

export type Task = z.infer<ReturnType<typeof taskSchema>> & { id?: string };
