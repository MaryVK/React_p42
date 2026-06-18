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