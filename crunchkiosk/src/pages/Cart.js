import CartBox from "../components/CartBox";
import "../css/Cart.css";
function Cart() {
    return ( 
        <>
        <div className = "cartTitle">
            <p>Cart</p><i class="fa-solid fa-cart-shopping"></i>
        </div>
            <CartBox />
        </>
    )
}

export default Cart;