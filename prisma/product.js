import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const createProduct = async (image,title,price,category)=>{


    const product = await prisma.product.create({
        data:{
            image,title,price,category
        }
    });


    return product

}
export const getAllProducts = async ()=>{


    const products = await prisma.product.findMany()

    return products

}

export const DeleteProduct = async (id)=>{


    await prisma.product.delete({
        where:{
            id:id
        }
    })

}