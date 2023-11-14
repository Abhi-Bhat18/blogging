import { z, ZodError } from "zod";

export const blogSchemaValidation = z.object({
  title: z.string(),
  content: z.string(),
  metaDescription: z.string(),
});
