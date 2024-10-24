import { z } from "zod";

export const NomorSchema = z.object({
  id: z.string().optional(),
  city: z.string().min(1),
  sekretariat: z.string(),
  address_sekretariat: z.string().min(1),
});

export type Nomor = z.infer<typeof NomorSchema>;

export const CreateNomorSchema = z.object({
  kota_go: z.string().min(1),
  sekretariat: z.string().min(1),
  phone_number: z.string().min(1),
  provider: z.string().min(1),
  active_date: z.date(),
  non_active_date: z.date().optional(),
  pj: z.string().min(1),
});

export type CreateNomor = z.infer<typeof CreateNomorSchema>;

export const NomorData = [
  {
    label: "Nomor Telepon",
    value: "phone_number",
    type: "Numbers",
  },
  {
    label: "Provider",
    value: "provider",
    type: "text",
  },
];

export const NomorData2 = [
  {
    label: "Tanggal Aktif",
    value: "active_date",
    type: "date",
  },
];


export const KotaGO = Array.from({ length: 5 }).map((_, i) => ({
  value: `kotago_${i + 1}`,
  label: `Kota GO - ${i + 1}`,
}));

export const SekretariatList = Array.from({ length: 10 }).map((_, i) => ({
  value: `sekretariat_${i + 1}`,
  label: `Sekretariat - ${i + 1}`,
}));

export const PjList = Array.from({ length: 5 }).map((_, i) => ({
  value: `pj_${i + 1}`,
  label: `PJ - ${i + 1}`,
}));


export const phoneNumbers = Array.from({ length: 5 }).map((_, i) => ({
  value: `08${Math.floor(Math.random() * 1000000000)}`, // Indonesian phone numbers start with 08
  label: `Phone - ${i + 1}`,
}));


export const ViewNomorSchema = z.object({
  id: z.string(),
  phone_number: z.string(),
  provider: z.string(),
  pj: z.string(),
  position: z.string(),
  active_date: z.date(),
  non_active_date: z.date().optional(),
});

export type ViewNomor = z.infer<typeof ViewNomorSchema>;