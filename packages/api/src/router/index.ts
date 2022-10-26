// src/server/router/index.ts
import { t } from "../trpc";

import { productRouter } from "./products";

export const appRouter = t.router({
    product: productRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
