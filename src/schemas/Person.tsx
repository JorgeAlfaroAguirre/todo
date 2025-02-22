import { z } from "zod";

export const taskSchema = z.object({
  taskName: z
    .string()
    .min(1, { message: "La tarea no puede estar vacía" })
    .min(5, { message: "Longitud minima 5 caracteres" }),
});
