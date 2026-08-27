import { z } from "zod";

export const enquirySchema = z
  .object({
    firstName: z.string().trim().min(1).max(80),
    lastName: z.string().trim().min(1).max(80),
    email: z.string().trim().email().max(254).transform((value) => value.toLowerCase()),
    phone: z
      .string()
      .trim()
      .min(7)
      .max(30)
      .regex(/^[0-9+()\s.-]+$/),
    claimType: z.string().trim().max(100).optional().default(""),
    message: z.string().trim().max(3000).optional().default(""),
    source: z.enum(["homepage", "contact"]),
  })
  .strict();
