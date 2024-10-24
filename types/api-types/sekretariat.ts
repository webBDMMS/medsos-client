import { z } from "zod";

// Zod schema
export const SekretariatSchema = z.object({
  id: z.number(),
  id_unit: z.number(),
  pj_pusat: z.number(),
  id_cabang: z.number(),
  cabang: z.string(),
  id_kota: z.number(),
  kota: z.string(),
  unit: z.string(),
  nama_gedung: z.string(),
  is_sekretariat: z.string().nullable(), // Updated to reflect the null value
  id_pj_cabang: z.string(),
  nama_pj_cabang: z.string(),
  updated_at: z.string().nullable(), // Updated to reflect the null value
  created_at: z.string().nullable(), // Updated to reflect the null value
  alamat: z.string(),
  instagram: z.string().nullable(), // Updated to reflect the null value
  url_google_maps: z.string().nullable(), // Updated to reflect the null value
});

export type TypeSekretariat = z.infer<typeof SekretariatSchema>;

export type SekretariatTable = {
  unit: string;
  is_sekretariat: string | null;
  alamat: string;
  instagram: string | null;
  id?: number | null;
  id_pj_cabang?: string | null;
  url_google_maps?: string | null;
  coverage_level?: string | null;
  fix_phone?: string | null;
};

export type SekretariatPhoneTable = {
  unit: string;
  id_kota: number | null;
  kota: string;
  is_sekretariat: string | null;
  alamat: string;
  id?: number | null;
  id_pj_cabang?: string | null;
};
