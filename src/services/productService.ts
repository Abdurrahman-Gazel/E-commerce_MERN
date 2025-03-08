import productModel from "../models/productModel";

export const getAllProducts = async () =>{
    return await productModel.find();
};

export const seedInitialProducts = async () => {
    const products = [
        { title: "Product 1", image: "image1.jpg", price: 10, stock: 100 },
        { title: "Product 2", image: "image2.jpg", price: 20, stock: 80 },
        { title: "Product 3", image: "image3.jpg", price: 40, stock: 10 },
        { title: "Product 4", image: "image4.jpg", price: 70, stock: 15 },
        { title: "Product 5", image: "image5.jpg", price: 110, stock: 20 },
        { title: "Product 6", image: "image6.jpg", price: 120, stock: 80 },
        { title: "Product 7", image: "image7.jpg", price: 40, stock: 60 },
        { title: "Product 8", image: "image8.jpg", price: 15, stock: 65 },
        { title: "Product 9", image: "image9.jpg", price: 45, stock: 90 },
        { title: "Product 10", image: "image10.jpg", price: 35, stock: 25 }
    ];

    const existingProducts = await getAllProducts();

    if(existingProducts.length === 0) {
        await productModel.insertMany(products)
    }
};

