import { z } from "zod";

export const ProductivitasSchema = z.object({
  id: z.string().optional(),
  sekretariat: z.string(),
  date: z.date(),
  city: z.string().optional(),
  platform: z.string().optional(),
  link: z.string().min(1),
});

export type Productivitas = z.infer<typeof ProductivitasSchema>;
