import { z } from "zod";

export const VerifikasiSchema = z.object({
  id: z.string().optional(),
  city: z.string(),
  sekretariat: z.string(),
  school_year: z.string(),
  date: z.string(),
  link: z.string(),
  platform: z.string(),
  status_productivity: z.string(),
  informations: z.string(),
});

export type Verifikasi = z.infer<typeof VerifikasiSchema>;

export const VerifyData = [
  {
    label: "Jenis Platform",
    value: "platform",
    type: "text",
  },
  {
    label: "Sekretariat",
    value: "sekretariat",
    type: "text",
  },
  {
    label: "Link Productivitas",
    value: "link",
    type: "text",
  },
  {
    label: "Tanggal",
    value: "date",
    type: "date",
  },
];

export const MutateSchema = z
  .object({
    platform: z.string(),
    sekretariat: z.string(),
    link: z.string(),
    date: z.date(),
    status: z.string(),
    reasons: z.string().optional(), // reasons is optional initially
  })
  .superRefine((data, ctx) => {
    // Conditional validation based on 'status'
    if (data.status === "Tidak Acc" && !data.reasons) {
      ctx.addIssue({
        code: "custom", // Add custom error code
        path: ["reasons"],
        message: "reasons is required when status is Tidak Acc",
      });
    }
  });

export type Mutate = z.infer<typeof MutateSchema>;


export const VerifikasiSchemaMedsos = z.object({
  id: z.string().optional(),
  city: z.string(),
  account: z.string(),
  school_year: z.string(),
  date: z.string(),
  link: z.string(),
  platform: z.string(),
  status_productivity: z.string(),
  informations: z.string(),
});

export type VerifikasiMedsos = z.infer<typeof VerifikasiSchemaMedsos>;