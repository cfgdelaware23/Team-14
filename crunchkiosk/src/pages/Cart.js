import CartBox from "../components/CartBox";
import "../css/Cart.css";
function Cart() {
    return ( 
        <>
        <div className = "cartTitle">
            <p>Cart</p>
        </div>
            <CartBox />
        </>
    )
}

export default Cart;