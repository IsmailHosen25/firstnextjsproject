import { createProduct, DeleteProduct, getAllProducts } from "@/prisma/product"

export default async function handler(req,res) {


    try{

        switch(req.method){
            case "POST":{
                const {image,title,price,category}=req.body
                const new_product= await createProduct(image,title,price,category)
                return res.json(new_product)
            }




            case "GET":{
                const products= await getAllProducts()
                return res.states(201).json(products)
            }

            case "DELETE":{
                const {id}=req.query
                await DeleteProduct(id)
                return res.states(201).json({"message":"deleted successfully"})
            }


        }






    }catch(error){

    }
    
}