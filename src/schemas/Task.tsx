import { z } from "zod";

export const personOptions = ["Manu Perrito", "Perrito Pablo", "Tomas Perro"];

export const taskSchema = z.object({
  taskName: z
    .string()
    .min(1, { message: "La tarea no puede estar vacía" })
    .min(5, { message: "Longitud minima 5 caracteres" }),
  taskDetail: z
    .string()
    .min(1, { message: "El detalle no puede estar vacio" })
    .min(5, { message: "Longitud minima 5 caracteres" }),
  person: z.string().refine((option) => personOptions.includes(option), {
    message: "Selecciona una persona de la lista válida",
  }),
  date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Debe ser una fecha válida",
    })
    .transform((val) => new Date(val)),
});

export type Task = z.infer<typeof taskSchema> & { id?: string };
