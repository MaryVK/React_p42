import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../../pages/_layout/Layout';
import Home from '../../pages/home/Home';
import Group from '../../pages/group/Group';
import NotFound from '../../pages/not_found/NotFound';

export default function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="group" element={<Group />} />

                <Route path='*' element={<NotFound />} />
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