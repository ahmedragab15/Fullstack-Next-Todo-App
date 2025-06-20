import { z } from "zod";

export const todoFormSchema = z.object({
    title: z
        .string()
        .min(4, {
            message: "title must be at least 4 characters.",
        })
        .max(30, {
            message: "title must be at most 30 characters.",
        }),
    body: z
        .string()
        .max(100, {
            message: "Description must be at most 100 characters.",
        })
        .optional(),
    completed: z.boolean()
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;
