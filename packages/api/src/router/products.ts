import { t } from "../trpc";
import { z } from "zod";

export const productRouter = t.router({
    create: t.procedure
        .input(
            z.object({
                name: z.string(),
                price: z.number(),
                img: z.string(),
                description: z.string(),
                categoryId: z.string().nullish(),
            })
        )
        .mutation(({ ctx, input }) => {
            return ctx.prisma.product.create({ data: { name: input.name, price: input.price, img: input.img, description: input.description, categoryId: input.categoryId } });
        }),
    all: t.procedure.query(({ ctx }) => {
        return ctx.prisma.product.findMany();
    }),
    byId: t.procedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.product.findFirst({ where: { id: input.id } });
    }),
    byname: t.procedure.input(z.object({ name: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.product.findMany({ where: { name: { contains: input.name } } });
    }),
    byCategory: t.procedure.input(z.object({ category: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.product.findMany({ where: { category: { name: { contains: input.category } } } });
    }),
    category: t.procedure.query(({ ctx }) => {
        return ctx.prisma.category.findMany({
            select: {
                id: true,
                name: true,
            },
        });
    }),
});
