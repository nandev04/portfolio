import z from "zod";

export const emailValidation = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .max(100, "O nome deve ter no máximo 100 caracteres"),
  email: z.email("Email inválido").min(1, "O email é obrigatório"),
  subject: z
    .string()
    .min(1, "O assunto é obrigatório")
    .max(150, "O assunto deve ter no máximo 150 caracteres"),
  message: z
    .string()
    .min(1, "A mensagem é obrigatória")
    .max(1000, "A mensagem deve ter no máximo 1000 caracteres"),
});

export type emailValidationType = z.infer<typeof emailValidation>;
