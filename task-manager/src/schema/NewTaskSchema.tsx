import { z } from "zod";

export const newTaskSchema = z.object({
  task: z.coerce
    .string({
      required_error: "*Please enter a task to plan!",
    })
    .min(1, {message: "*Please enter a task to plan!"})
    .trim(),
});

export type FormData = z.infer<typeof newTaskSchema>;
