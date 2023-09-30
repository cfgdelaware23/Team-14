import "../css/Shop.css";

function Shop() {
    return ( 
        <>
        <div className = "shopList">
            <p>Shop</p>
        </div>

        <div className = "shopItem">
            <Link>Fruits</Link>
        </div>
        <div className = "shopItem">
            <Link>Veggies</Link>
        </div>
        <div className = "shopItem">
            <Link>Carbs</Link>
        </div>
        <div className = "shopItem">
            <Link>Proteins</Link>
        </div>
        <div className = "shopItem">
            <Link>Dairy/Al</Link>
        </div>
        </>
    )
}

export default Shop;