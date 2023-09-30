import CartBox from "../components/CartBox";
import Footer from "../components/Footer";
import "../css/Cart.css";
function Cart() {
    return ( 
        <>
        <div className = "cartTitle">
            <p>Cart</p>
        </div>
            <CartBox />
            <Footer />
        </>
    )
}

export default Cart;