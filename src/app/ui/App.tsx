import { BrowserRouter, Route, Routes } from 'react-router-dom';  // библиотека маршрутизации, позвол.открывать разные страницы
import './App.css';
import Layout from '../../pages/_layout/Layout';
import Home from '../../pages/home/Home';
import Group from '../../pages/group/Group';
import NotFound from '../../pages/not_found/NotFound';

export default function App() {  // функция-компонент, HTML внутри React 
    return (
     <BrowserRouter>    
     {/* вкл. маршрутизацию, Без него роуты работать не будут */}
     
        <Routes>
             {/* контейнер для всех маршрутов */}
     
            <Route path="/" element={<Layout />} >
             {/* если польз-ль открыл / используется Layout */}
     
                <Route index element={<Home />} />
                <Route path="group/:slug" element={<Group />} />
                {/* значение после group/ сохр. в параметр slug   slug = "game"*/}

                <Route path='*' element={<NotFound />} />
                {/* любой неизвестный адрес - откроет страничку <NotFound />*/}
            </Route>
        </Routes>
    </BrowserRouter>
    );
}
/*
Д.З. Розробити компонент (feature) на базі checkbox
(switch).
Додати до компонента Counter новий компонент
з текстом "не телефонувати"
*/