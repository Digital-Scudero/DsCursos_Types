import z from "../node_modules/zod/index.cjs";

const userSchema = z.object({
	id: z.number().int().positive(),
	name: z.string().min(2).max(100),
	email: z.email(),
	createdAt: z.date(),
});

type User = z.infer<typeof userSchema>;

export { userSchema };
export type { User };
