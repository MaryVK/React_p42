import { createContext } from "react";
import type IAppContext from "./model/IAppContext";

const  AppContext = createContext<IAppContext>({
    cart: {
         cartItems: [],
         price: 0,
    },
    setCart(_) {
        throw "setCart: Not implemented";

    },
});

export default AppContext;

/* 
Контекст (окружение) - общая среда, в середине 
которой создаётся возможность доступа к данным, 
кроме того к корзинке потребителя
*/