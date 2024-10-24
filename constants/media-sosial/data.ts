import { z } from "zod";

export const MedsosSchema = z.object({
  id: z.string().optional(),
  city: z.string().min(1),
  account_name: z.string().min(1),
  username: z.string().min(1),
  status: z.enum(["Aktif", "Non Aktif"]),
});

export type Medsos = z.infer<typeof MedsosSchema>;

export const MedsosData = [
  {
    label: "Nama Akun",
    value: "account_name",
    type: "text",
  },
  {
    label: "Username",
    value: "username",
    type: "text",
  },
  {
    label: "Password",
    value: "password",
    type: "text",
  },
  {
    label: "Url Akun",
    value: "url_account",
    type: "text",
  },
  {
    label: "Email Akun",
    value: "email_account",
    type: "text",
  },
];

export const CreateMedsosSchema = z
  .object({
    city: z.string({ message: "city is required" }),
    sekretariat: z.array(z.string({ message: "sekretariat is required" })),
    phone: z.string({ message: "phone is required" }),
    account_name: z.string().min(1, { message: "account name is required" }),
    username: z.string().min(1, { message: "username is required" }),
    password: z.string().min(1, { message: "password is required" }),
    url_account: z.string().min(1, { message: "url akun is required" }),
    email_account: z
      .string()
      .email()
      .min(1, { message: "email akun is required" }),
    status: z.enum(["Aktif", "Non Aktif"]),
    platform_type: z.string(),
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

export type CreateMedsos = z.infer<typeof CreateMedsosSchema>;

export const items = [
  {
    value: "semua",
    label: "Semua",
  },
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
