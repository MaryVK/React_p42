import '../../shared/extensions/NumberExtensions';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../../pages/_layout/Layout';
import Home from '../../pages/home/Home';
import Group from '../../pages/group/Group';
import NotFound from '../../pages/not_found/NotFound';
import AppContext from '../../features/_context/AppContext';
import Cart from "../../pages/cart/ui/Cart";
import type ICart from "../../entities/cart/model/ICart";
import CartApi from "../../entities/cart/api/CartApi";
import Auth from '../../pages/authorization/Auth';
import Privacy from '../../pages/privacy/Privacy';

export default function App() {  // функция-компонент, HTML внутри React 
    const [cart, setCart] = useState<ICart>({cartItems: [], price: 0});
    const updateCart = (cart: ICart) : void => {
        //  перед изменением состояния производим запрос на вычисление скидок в корзинке
        CartApi.calculateCart(cart)
        .then(setCart);
    }

    return (
        <AppContext.Provider value={{cart, setCart: updateCart}}>
            
     <BrowserRouter>    
     {/* вкл. маршрутизацию, Без него роуты работать не будут */}
     
        <Routes>
             {/* контейнер для всех маршрутов */}
     
            <Route path="/" element={<Layout />} >
             {/* если польз-ль открыл / используется Layout */}
     
                <Route index element={<Home />} />
                <Route path='auth' element={<Auth />} />
                <Route path="cart" element={<Cart/>} />
                <Route path="group/:slug" element={<Group />} />
                {/* значение после group/ сохр. в параметр slug   slug = "game"*/}
                
                <Route path='privacy' element={<Privacy/>} />
                <Route path='*' element={<NotFound />} />
                {/* любой неизвестный адрес - откроет страничку <NotFound />*/}
            </Route>
        </Routes>
    </BrowserRouter>
 </AppContext.Provider>
    );
}
/*
Д.З. Розробити компонент (feature) на базі checkbox
(switch).
Додати до компонента Counter новий компонент
з текстом "не телефонувати"
*/