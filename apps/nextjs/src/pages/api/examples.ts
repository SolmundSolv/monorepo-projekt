// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@acme/db";
const prop = [
    {
        name: "Earthen Bottle",
        price: 48,
        img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        description: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        name: "Nomad Tumbler",
        price: 35,
        img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        description: "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        name: "Focus Paper Refill",
        price: 89,
        img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        descripton: "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        name: "Machined Mechanical Pencil",
        price: 35,
        img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        description: "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
];

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
    // const products = await prisma.product.findMany()
    // const products = await prisma.product.create({
    //   data: {
    //     name: 'Earthen Bottle',
    //     price: 48,
    //     img: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    //     descripton: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    //   }
    // })
    // const examples = await prisma.example.findMany();
    res.status(200);
};

export default examples;
