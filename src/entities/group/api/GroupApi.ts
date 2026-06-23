//  DAL - слой доступа к данным

import type IGroup from "../model/IGroup";
import type IGroupProduct from "../model/IGroupProduct";

import type IProductBrief from "../model/IProductBrief";

// что-то по типу БД, массив с данными
const groups:Array<IGroup> = [    
    {
        id: "1",
        name: "Shop gaming",
        description: "Get your game on",
        slug: "game",
        imageUrl: "/img/group1.jpg"
    },
    {
        id: "2",
        name: "Jeans",
        description: "Shop Fashion for less",
        slug: "jeans",
        imageUrl: "/img/group2.jpg"
    },
    {
        id: "3",
        name: "Watches",
        description: "Wireless Tech",
        slug: "watches",
        imageUrl: "/img/group3.jpg"
    },
    {
        id: "4",
        name: "Smartphones",
        description: "Wireless Tech",
        slug: "smartphones",
        imageUrl: "/img/group4.jpg"
    },
    {
        id: "5",
        name: "Tablets",
        description: "Wireless Tech",
        slug: "tablets",
        imageUrl: "/img/group5.jpg"
    },
    {
        id: "6",
        name: "Headphones",
        description: "Wireless Tech",
        slug: "headphones",
        imageUrl: "/img/group6.jpg"
    },
    {
        id: "7",
        name: "PC",
        description: "Deals on top categories",
        slug: "pc",
        imageUrl: "/img/group7.jpg"
    },
    {
        id: "8",
        name: "Men",
        description: "Most-loved watches",
        slug: "men-watches",
        imageUrl: "/img/group8.jpg"
    },
    {
        id: "9",
        name: "Laptops",
        description: "Level up your PC here",
        slug: "laptops",
        imageUrl: "/img/group9.jpg"
    },
    {
        id: "10",
        name: "Equipment",
        description: "Gear up to get fit",
        slug: "equipment",
        imageUrl: "/img/group10.jpg"
    },
    {
        id: "11",
        name: "Kitchen & dining",
        description: "New home arrivals under $50",
        slug: "kitchen_dining",
        imageUrl: "/img/group11.jpg"
    }
];


const products:Array<IProductBrief> = [
    {
        id: "4-1",
        name: "Samsung Galaxy S26 Ultra",
        description: "Premium Android smartphone with Galaxy AI",
        slug: "samsung-galaxy-s26-ultra",
        imageUrl: "/img/products_4-1.jpg",
        price: 1117.316,
        stock: 12
    },
    {
        id: "4-2",
        name: "Apple iPhone 16 Pro Max",
        description: "512GB, Black Titanium - Unlocked (Renewed)",
        slug: "apple-iPhone-16-Pro-Max",
        imageUrl: "/img/products_4-2.jpg",
        price: 788.97,
        stock: 8
    },
    {
        id: "4-3",
        name: "Samsung Galaxy S26 Ultra",
        description: "Unlocked Android Smartphone, 512GB, Privacy Display, Galaxy AI",
        slug: "Samsung-Galaxy-S26-Ultra",
        imageUrl: "/img/products_4-3.jpg",
        price: 1156.14,
    },
    {
        id: "4-4",
        name: "Apple iPhone 17 Pro",
        description: "US Version, 256GB, eSIM, Cosmic Orange for AT&T (Renewed)",
        slug: "Apple-iPhone-17-Pro",
        imageUrl: "/img/products_4-4.jpg",
        price: 1249.72,
        actionPrice: 1.123
    },
    {
        id: "4-5",
        name: "Google Pixel 10 Pro XL",
        description: "Unlocked Android Smartphone with Gemini, Your Google AI Assistant",
        slug: "Google-Pixel-10-Pro-XL",
        imageUrl: "/img/products_4-5.jpg",
        price: 823.55,
        stock: 20
    },
    {
        id: "4-6",
        name: "Moto G Power 5G",
        description: "2024 | Unlocked | Made for US 8/128GB | 50MP Camera | Midnight Blue",
        slug: "Moto-G-Power-5G",
        imageUrl: "/img/products_4-6.jpg",
        price: 119.99,
        actionPrice: 100,
        stock: 15
    },
    {
        id: "4-7",
        name: "Motorola Moto G Power - 2025",
        description: "2024 | Unlocked | Made for US 8/128GB | 50MP Camera | Midnight Blue",
        slug: "Motorola-Moto-G-Power",
        imageUrl: "/img/products_4-7.jpg",
        price: 259.99,
        stock: 18
    },
    {
        id: "4-8",
        name: "Motorola Moto G Play LTE",
        description: "Unlocked | Made for US 4/64GB | 50MP Camera | Sapphire Blue",
        slug: "Motorola-Moto-G-Play-LTE",
        imageUrl: "/img/products_4-8.jpg",
        price: 105.87,
        actionPrice: 95
    },
    {
        id: "4-9",
        name: "Apple iPhone 13",
        description: "128GB, Blue - Unlocked (Renewed)",
        slug: "Apple-iPhone-13",
        imageUrl: "/img/products_4-9.jpg",
        price: 450,
        stock: 23
    },
    {
        id: "4-10",
        name: "Motorola Moto G Stylus 5G",
        description: "2024 | Unlocked | Made for US 8/256GB | 50MP Camera | Caramel Latte | 2024",
        slug: "Motorola-Moto-G-Stylus-5G",
        imageUrl: "/img/products_4-10.jpg",
        price: 181.99,
        stock: 15
    }
];

export default class GroupApi {
    
    // static - метод принадлеж.классу, а не объекту
    // Promise - функция работает асинхроннно, результат будет позже, success → resolve , error → reject 
    // Array<IGroup> - массив объектов типа IGroup
    static allGroups(): Promise<Array<IGroup>> {
        
        return new Promise<Array<IGroup>>( (resolve, reject) => {
            // setTimeout(callback, delay)
            // callback→ что выполнить
           //delay → через сколько миллисекунд
            setTimeout(
                () => resolve(groups),  // успешно заверш. промис и возвращ. групс
                500
            )
        } );
    }

    static groupDetails(slug:string): Promise<IGroupProduct> {   // Через некоторое время я верну объект типа IGroupProduct.
        return new Promise<IGroupProduct>( (resolve, reject) => {
            setTimeout(
                () => {
                    let group = groups.find(g => g.slug == slug);
                    if(group) {
                        const currentProducts = products.filter(
                            p => p.id.startsWith(group.id + "-")
                        );

                        resolve({
                            group,
                            products: currentProducts
                        });
                    }
                    else {
                        reject("Not Found");
                    }
                },
                500
            )
        } );
    }

}
/*
Д.З. Створити сторінку "Політика конфіденційності (Privacy)"
Наповнити її стандартною інформацією (дозволяється ШІ)
Розмістити посилання на неї в шаблоні сторінок для доступності
з усіх сторінок сайту
*/