import '../css/Item.css'
function Item({itemName,itemPrice,itemQuantity}) {
    return (
        <>
            <div className='item'> 
                <p className="itemName">{itemName}</p>
                <p className="itemPrice">{itemPrice}</p>
                <p className="itemQuantity">{itemQuantity}</p>
            </div>
        </>
    )
}

export default Item;