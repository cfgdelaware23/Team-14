import '../css/Item.css'
function Item({item, index}) {

    return (
        <div className="item" key={index}>
            <div className="item-name">{item[0]}</div>
            <div className="item-quantity">Quantity: {item[2]}</div>
            <div className="item-price">${(item[1] * item[2]).toFixed(2)}</div>
        </div>
    )
}

export default Item;