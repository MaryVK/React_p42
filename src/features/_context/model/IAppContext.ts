import type ICartItem from "../../../entities/cart/model/ICartItem";

export default interface IAppContext {
    cart: Array<ICartItem>,
    setCart(cart: Array<ICartItem>): void,
}