import { AppRouter } from "@acme/api";
import { inferProcedureOutput } from "@trpc/server";
import Link from "next/link";
import React, { ReactElement } from "react";
import AdminLayout from "../../../../components/Admin/AdminLayout";
import { trpc } from "../../../utils/trpc";
import { NextPageWithLayout } from "../../_app";

const Products: NextPageWithLayout = () => {
    const { data: products } = trpc.product.all.useQuery();
    return (
        <div>
            {/* <Link href="[id]"></Link> */}
            <table className="h-auto w-full table-fixed rounded-md text-white">
                <thead className="rounded-t-md border-b border-gray-200 bg-gray-800 text-left font-bold">
                    <tr className="rounded-md">
                        <th className="p-3">Number</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-black">
                    {products?.map((res: inferProcedureOutput<AppRouter["product"]["byId"]>) => {
                        return (
                            <tr key={res?.id}>
                                <td>{res?.name}</td>
                                <td>{res?.price.toString()}</td>
                                <td>{res?.description}</td>
                                <td>
                                    <Link href={"products/[id]"} as={`products/${res?.id}`}>
                                        Edit
                                    </Link>{" "}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

Products.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default Products;
