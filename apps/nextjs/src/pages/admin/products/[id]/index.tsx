import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import AdminLayout from "../../../../../components/Admin/AdminLayout";
import { trpc } from "../../../../utils/trpc";
import { NextPageWithLayout } from "../../../_app";

const ExactProduct: NextPageWithLayout = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: product, isLoading } = trpc.product.byId.useQuery({ id: id?.toString() ?? "0" });
    return (
        <div>
            {product?.name} {product?.price.toString()} {product?.description}
        </div>
    );
};

ExactProduct.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};

export default ExactProduct;
