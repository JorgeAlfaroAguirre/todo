import { z } from "zod";

export const asigneeSchema = z.object({
  name: z
    .string()
    .min(1, { message: "La tarea no puede estar vacía" })
    .min(5, { message: "Longitud minima 5 caracteres" }),
  email: z
    .string()
    .min(1, { message: "Correo requerido." })
    .email("Correo invalido"),
});

export type Asignee = z.infer<typeof asigneeSchema> & { id?: string };
