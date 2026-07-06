import type ICartItem from "./ICartItem";

export default interface ICart {
    cartItems: ICartItem[], // товары в корзинке
    price: number,         //  цена заказа с учётом скидок
    delivery?: number,     //  цена доставки
    discount?: string,     //  уведомление о скидке, "-20%", "-250грн"... 
}