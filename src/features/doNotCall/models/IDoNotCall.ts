export interface IDoNotCall {
    checked: boolean;
    onChange: (checked: boolean) => void; 
    // компонент, которой обязательно должен получить функцию . onChange - функция, которая сработает, когда пользователь нажмёт на переключатель
    // (checked: boolean) - то, что функция принимает на входе в момент вызова
}

