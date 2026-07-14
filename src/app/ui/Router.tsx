import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../pages/_layout/Layout";
import Home from "../../pages/home/Home";
import Cart from "../../pages/cart/ui/Cart";
import Group from "../../pages/group/Group";
import Auth from "../../pages/authorization/Auth";
import Privacy from "../../pages/privacy/Privacy";
import NotFound from "../../pages/not_found/NotFound";

export default function  Router() {
    return <BrowserRouter>    
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
}