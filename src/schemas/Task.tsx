import { z } from "zod";

const personas = ["Manu Perrito", "Perrito Pablo", "Tomas Perro"];

export const taskSchema = z.object({
  taskName: z
    .string()
    .min(1, { message: "La tarea no puede estar vacía" })
    .min(5, { message: "Longitud minima 5 caracteres" }),
  taskDetail: z
    .string()
    .min(1, { message: "El detalle no puede estar vacio" })
    .min(5, { message: "Longitud minima 5 caracteres" }),
  person: z.string().refine((value) => personas.includes(value), {
    message: "Persona no válida",
  }),
  date: z.date(),
});
