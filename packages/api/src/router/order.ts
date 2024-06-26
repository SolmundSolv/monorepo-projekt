import { t } from "../trpc";
import { z } from "zod";

export const orderRoputer = t.router({
    create: t.procedure
        .input(
            z.object({
                contractor: z.string(),
                number: z.number(),
                price: z.number(),
                status: z.string(),
                products: z.string().array(),
            })
        )
        .mutation(({ ctx, input }) => {
            const connect: { id: string }[] = [];
            input.products.map((e) => {
                connect.push({ id: e });
            });

            return ctx.prisma.order.create({
                data: {
                    number: input.number,
                    contractorId: input.contractor,
                    statusId: input.status,
                    price: input.price,
                    products: {
                        connect,
                    },
                },
            });
        }),
});
