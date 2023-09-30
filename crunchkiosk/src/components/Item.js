import '../css/Item.css'
function Item({itemName,itemPrice,itemQuantity}) {
    return (
        <>
            <div className='item'> 
                <p>{itemName}</p>
                <p>{itemPrice}</p>
                <p>{itemQuantity}</p>
            </div>
        </>
    )
}

export default Item;