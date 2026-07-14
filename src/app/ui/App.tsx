import '../../shared/extensions/NumberExtensions';
import { useEffect, useState } from "react";
import './App.css';
import AppContext from '../../features/_context/AppContext';
import type ICart from "../../entities/cart/model/ICart";
import CartApi from "../../entities/cart/api/CartApi";
import type IUser from '../../entities/user/model/IUser';
import { getRememberedUser, } from '../../entities/user/lib/UserLib';
import Router from './Router';

export default function App() {  // функция-компонент, HTML внутри React 
    const [cart, setCart] = useState<ICart>({cartItems: [], price: 0});
    const [user, setUser] = useState<IUser|undefined>();
    const [isLoading, setLoading] = useState<boolean>(false);
    const updateCart = (cart: ICart) : void => {
        //  перед изменением состояния производим запрос на вычисление скидок в корзинке
        CartApi.calculateCart(cart)
        .then(setCart);
    }

    useEffect(() => {
        // действует при запуске и перезапуске
        // проверяем, есть ли в локальном хранилище данные про пользователя (токен)
        setUser(getRememberedUser());

    }, []);

    return (
        <AppContext.Provider value={{cart, setCart: updateCart, user, setUser, isLoading, setLoading}}>
            <Router />
 </AppContext.Provider>
    );
}

/*
Д.З. Розробити компонент (feature) на базі checkbox
(switch).
Додати до компонента Counter новий компонент
з текстом "не телефонувати"
*/