import { z } from "zod";

export const GMapsSchema = z.object({
  id: z.string().optional(),
  city: z.string().min(1),
  sekretariat: z.string().min(1),
  business_unit_name: z.string().min(1),
  map_point: z.string().min(1),
  status: z.enum(["Aktif", "Non Aktif"]),
});

export type GMaps = z.infer<typeof GMapsSchema>;


export const CreateGMapsSchema = z
  .object({
    city: z.string({ message: "city is required" }),
    sekretariat: z.array(z.string({ message: "sekretariat is required" })),
    email_business: z.string({ message: "email business is required" }).email(),
    business_unit: z.string().min(1, { message: "business unit name is required" }),
    unit_point: z.string().min(1, { message: "unit point is required" }),
    phone_publish: z.string().min(1, { message: "phone publish is required" }),
    url_wa: z.string().min(1, { message: "url whatsapp is required" }),
    status: z.enum(["Aktif", "Non Aktif"]),
    reasons: z.string().optional(), // reasons is optional initially
  })
  .superRefine((data, ctx) => {
    // Conditional validation based on 'status'
    if (data.status === "Non Aktif" && !data.reasons) {
      ctx.addIssue({
        code: "custom", // Add custom error code
        path: ["reasons"],
        message: "reasons is required when status is Non Aktif",
      });
    }
  });

export type CreateGMaps = z.infer<typeof CreateGMapsSchema>;

export const GMapsData = [
  {
    label: "Email Akun Bisnis",
    value: "email_business",
    type: "text",
  },
  {
    label: "Penamaan Unit Bisnis",
    value: "business_unit",
    type: "text",
  },
  {
    label: "Titik Unit Bisnis",
    value: "unit_point",
    type: "text",
  },
  {
    label: "Link Wa Me",
    value: "url_wa",
    type: "text", 
  },
];