import { z } from "zod";

// ======== instagram ========
export const PemenuhanSchema = z.object({
  id: z.string().optional(),
  branch: z.string().min(1),
  account_name: z.string(),
  number_of_publication: z.string().min(1),
  phone: z.string().min(1),
});

export type Pemenuhan = z.infer<typeof PemenuhanSchema>;

export const FullAchivedSchema = z.object({
  id: z.string().optional(),
  branch: z.string().min(1),
  account_name: z.string(),
  // full one year
  numbers_of_day: z.string(),
  average_of_day: z.string(),
  // each month
  phone: z.string().min(1),
  number_of_publication: z.string().min(1),
  numbers_publication: z.string().min(1),
  total_day: z.string().min(1),
});

export type FullAchived = z.infer<typeof FullAchivedSchema>;

// ======== google maps ========
export const CompleteGmapsSchema = z.object({
  id: z.string().optional(),
  city: z.string().min(1),
  sekretariat: z.string(),
  number_of_publication: z.string().min(1),
  phone: z.string().min(1),
});

export type CompleteGmaps = z.infer<typeof CompleteGmapsSchema>;