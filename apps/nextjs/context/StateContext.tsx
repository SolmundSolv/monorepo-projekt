import { AppRouter } from "@acme/api";
import { inferProcedureOutput } from "@trpc/server";
import React, { createContext, useContext, useState } from "react";
import Product from "../src/pages/products/[id]";

type Product = inferProcedureOutput<AppRouter["product"]["byId"]>;
interface AppContextProps {
    cartItems: Product[];
    totalPrice: number;
    onAdd: (item: Product) => void;
    onRemove: (item: Product) => void;
}
const Context = createContext<AppContextProps | null>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StateContext = ({ children }: any) => {
    const cart: Product[] = [];
    const [cartItems, setCartItems] = useState(cart);
    const [totalPrice, setTotalPrice] = useState(0);
    let foundProduct: Product | undefined;
    const onAdd = (item: Product) => {
        if (cartItems.find((product: Product) => product?.id === item?.id)) {
            return;
        }
        if (cartItems || item) setCartItems((cartItems) => [...cartItems, item]);
        setTotalPrice((currPrice) => {
            return parseInt(item?.price.toString() ?? "0") + currPrice;
        });
    };
    const onRemove = (item: Product) => {
        foundProduct = cartItems.find((product: Product) => product?.id === item?.id);
        if (!foundProduct) {
            return;
        }
        const newCartItems = cartItems.filter((product: Product) => product?.id !== foundProduct?.id);
        setCartItems(newCartItems);
        setTotalPrice(totalPrice - foundProduct.price.toNumber());
    };
    return (
        <Context.Provider
            value={{
                cartItems,
                totalPrice,
                onAdd,
                onRemove,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default StateContext;
export const useStateContext = () => useContext(Context);
