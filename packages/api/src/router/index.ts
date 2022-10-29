// src/server/router/index.ts
import { t } from "../trpc";
import { orderRoputer } from "./order";

import { productRouter } from "./products";

export const appRouter = t.router({
    product: productRouter,
    order: orderRoputer,
});

// export type definition of API
export type AppRouter = typeof appRouter;
