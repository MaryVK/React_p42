import { useContext } from "react";
import './Cart.css';
import AppContext from "../../../features/_context/AppContext"; 
import Counter from "../../../widgets/counter/Counter";
import type ICartItem from "../../../entities/cart/model/ICartItem";
 
export default function Cart() {
    const {cart} = useContext(AppContext);

    
    return <div className='row mx-3'>
        <div className='col col-8'>
            <h1>Shopping Cart</h1>
            {cart.cartItems.length == 0 
            ? <p>Cart is empty</p>
            : cart.cartItems.map(ci => <CartItemView key={ci.product.id} ci={ci} />)}
        </div>
        <div className='col col-4'>
            <div className='mt-2 bg-light border p-0'>
                <h3 className='bg-body-tertiary border-bottom py-2 text-center'>Order summary</h3>
                <div className='d-flex justify-content-between mx-2 mb-2'>
                    <span>Subtotal</span>
                    <b>{cart.cartItems.reduce((acc, x) => acc + x.price, 0.0).pad2()}</b>
                </div>
                <div className='d-flex justify-content-between mx-2 mb-3'>
                    <span>Delivery</span>
                    <b>{cart.delivery}</b>
                </div>
                <div className='d-flex justify-content-between px-2 mb-1 border-top py-2'>
                    <span>Total</span>
                    <b>{cart.price.pad2()}</b>
                </div>
            </div>
            <button className='btn btn-success w-100 mt-2'>Checkout</button>
        </div>
    </div>;
}


function CartItemView({ci}:{ci:ICartItem}) {
    const {cart, setCart} = useContext(AppContext);

    const onQuantityChange = (quantity:number) => {
        if(quantity > 0) {
            ci.quantity = quantity;
            // т.к TS  - язык референсный, то ci непосредственно это ссылка на объект в самой корзинке.
            // изменение кол-ва через него повлияет на корзинкую
            // НО изменение этого объекта не отслеживается реактом, для реакции необходимо изменение положения.
             
            setCart({...cart});   // скопировать все свойства старой корзины
            // setCart(...cart) - не будет работать, т.к реакт 
            // выслеживает изменения по ссылкам, а изменения в содержимом массива не изменяют сам массив.
            // Для эффекта необходимо создать новый массив/ объект с копией данного [...cart]
        }
        else {
            // if(confirm("Delete?")) {
            //     setCart({
            //         ...cart,  // заменяю старую корзинку новой
            //         cartItems: cart.cartItems.filter(   // старый cartItems заменяется новым // cart.cartItems - новый массив
            //             item => item.product.id !== ci.product.id
            //         )
            //     });

            showAlert({
                title: "Подтверждение действий",
                message: "Удалить с корзинки товар " + ci.product.name + "?",
                isCancelable: true,
                buttons: [
                    {title: "Да", action: () => {
                        setCart({
                            ...cart,  // заменяю старую корзинку новой
                            cartItems: cart.cartItems.filter(   // старый cartItems заменяется новым // cart.cartItems - новый массив
                                item => item.product.id !== ci.product.id
                        )
                    })
                    }},
                    {title: "Нет"}
                ]
            });

            }
        }

    const fullPrice = ci.product.price * ci.quantity;
    return <div className='row mb-3'>
    <div className='col col-2'>
        <img src={ci.product.imageUrl} className='w-100' alt={ci.product.name} />
    </div>
    <div className='col col-5 col-sm-3'>{ci.product.name}</div>
    <div className='col col-1 col-sm-2 text-center'>{ci.product.price.pad2()}</div>
    <div className='col col-3 text-center'>
        <Counter 
            initialQuantity={ci.quantity}
            onChange={onQuantityChange} />                    
    </div>
    <div className='col col-1 col-sm-2 text-center'>
        <span className='position-relative'>
            {ci.price.pad2()}
            {ci.price < fullPrice && <div className='strike-ci-price'>{fullPrice.pad2()}</div>}
        </span>
    </div>
</div>;
}

function showAlert(arg0: { title: string; message: string; isCancelable: boolean; buttons: ({ title: string; action: () => void; } | { title: string; })[]; }) {
    throw new Error("Function not implemented.");
}
