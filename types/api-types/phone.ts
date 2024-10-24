import { z } from "zod";

// Zod schema
export const PhoneSchema = z.object({
  id: z.number(),
  id_unit: z.number(),
  no_telepon: z.string(),
  provider: z.string(),
  tanggal_aktif: z.string(), // ISO date string
  tanggal_non_aktif: z.string(), // ISO date string
  penanggung_jawab: z.string(),
  is_published: z.boolean().nullable(),
  created_at: z.string().nullable(), // ISO date string
  updated_at: z.string(), // ISO date string
  id_sekretariat: z.number().nullable(),
});

// TypeScript type
export type TypePhone = z.infer<typeof PhoneSchema>;
