import { createRouter } from "../context";
import { z } from "zod";
import { resolve } from "path";

export const exampleRouter = createRouter().query("/", {
    async resolve({ ctx }) {
        const res = ctx.prisma.product.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                img: true,
                description: true,
            },
        });
        return await res;
    },
});
