import CartBox from "../components/CartBox";
import "../css/Cart.css";
function Cart() {
    const imageIcon = <i class="fa-solid fa-cart-shopping"></i>

    return ( 
        <>
        <div className = "cartTitle">
            <h1>Cart {imageIcon}</h1> 
        </div>
            <CartBox />
        </>
    )
}

export default Cart;