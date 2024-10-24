import { z } from "zod";

export const secretariatSchema = z.object({
  id: z.string().optional(),
  secretariat: z.string().min(1),
  coverage_level: z.string(),
  address: z.string().min(1),
  google_maps: z.string().url(),
  instagram_account: z.string().url(),
  no_halo: z.string(),
  fix_phone: z.string(),
});

export type Secretariat = z.infer<typeof secretariatSchema>;

export const asetGMaps = [
  {
    label: "Nama Unit Bisnis",
    value: "nama_unit_bisnis",
    type: "text",
  },
  {
    label: "Titik Unit Bisnis",
    value: "titik_unit_bisnis",
    type: "text",
  },
  {
    label: "Nomor WA",
    value: "nomor_whatsapp",
    type: "Numbers",
  },
  {
    label: "Nomor WA",
    value: "nomor_whatsapp",
    type: "Numbers",
  },
]

export const asetInstagram = [
  {
    label: "Nama Akun",
    value: "nama_akun",
    type: "text",
  },
  {
    label: "Username",
    value: "username",
    type: "text",
  },
  {
    label: "Url Akun",
    value: "url_akun",
    type: "text",
  },
]

export const secretariatData = [
  {
    value: "coverage_level",
    label: "Bandoeng",
  },
];
