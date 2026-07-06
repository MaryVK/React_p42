import type ICart from "../../../entities/cart/model/ICart";


export default interface IAppContext {
    cart: ICart,
    setCart(cart: ICart): void,
}