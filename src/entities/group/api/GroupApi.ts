import type IGroup from "../model/IGroup";

export default class GroupApi {

    static allGroups(): Promise<Array<IGroup>> {
        return new Promise<Array<IGroup>>( (resolve, reject) => {
            setTimeout(
                () => resolve([
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
                ]),
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