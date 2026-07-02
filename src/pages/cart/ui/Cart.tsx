import { useContext } from "react";
import './ui/Cart.css';
import AppContext from "../../../features/_context/AppContext"; 
import Counter from "../../../widgets/counter/Counter";
import type ICartItem from "../../../entities/cart/model/ICartItem";
 
export default function Cart() {
    const {cart} = useContext(AppContext);

    
    return <div className="row mx-3">

        <div className="col col-8">
            <h1>Shopping Cart</h1>
            {cart.length == 0 
            ? <p>Cart is empty</p>
            : cart.map(ci => <CartItemView key={ci.product.id} ci={ci}/>)}
            </div>
            <div className="col col-4 bg-light">
                <h2>Order summary</h2>
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
             
            setCart([...cart]);
            // setCart(...cart) - не будет работать, т.к реакт 
            // выслеживает изменения по ссылкам, а изменения в 
            // содержимом массива не изменяют сам массив.
            // Для эффекта необходимо создать новый массив с копией данного [...cart]
        }
        else {
            if(confirm("Delete?")) {

            }
        }
    }

    return <div key={ci.product.id} className="row mb-3">
                <div className="col col-1">
                    <img src={ci.product.imageUrl} className="w-100" alt={ci.product.name}/>
                </div>
                <div className="col col-5">{ci.product.name}</div>
                <div className="col col-1">{ci.product.price}</div>
                <div className="col col-3">
                     <Counter 
                          initialQuantity={ci.quantity}
                          onChange={onQuantityChange} />
                     
                </div>
                
                <div className="col col-1">{ci.product.price * ci.quantity}</div>
            </div>
}