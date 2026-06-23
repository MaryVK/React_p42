import { createRoot } from 'react-dom/client';   // запуск реакт-приложения в браузере
import App from './ui/App.tsx';

createRoot(document.getElementById('root')!).render(<App />);  //createRoot - корень реакта, .render() - нарисуй интерфейс, <App /> - Найди div root и нарисуй внутри него компонент App.
