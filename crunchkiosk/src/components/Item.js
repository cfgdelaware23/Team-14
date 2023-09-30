import '../css/Item.css'
function Item({item, index, total, setTotal}) {

    const updateQuantity = (amt) => {
        item[2] += amt;
    };

    const handleSubtract = (thing) => {
        console.log("handling subtract");
    };

    const handleAdd = () => {
        console.log("handling add");
    };

    return (
        <div className="item" key={index}>
            <div className="item-name">{item[0]}</div>
            <div className="item-price">${(item[1] * item[2]).toFixed(2)}</div>
            <div>
                <div className='remove-button' onClick={handleAdd}>+</div>
                <div className="item-quantity">Quantity: {item[2]}</div>
                <div className='add-button' onClick={handleSubtract(item[2])}>-</div>
            </div>

        </div>
    )
}

export default Item;