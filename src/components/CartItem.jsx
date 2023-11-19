import { priceAddZero } from "../utils/cartUtils";
import "./styles/CartItem.css";

function CartItem({ item, deleteCartItem, updateCartItemQty }) {
    return (
        <div className="cartItem">
            <img className="cartItemImage" src={item.image} alt="Item Image" />
            <div>
                <p>{item.title}</p>
                <p>
                    <strong>Size: </strong>
                    {item.size}
                </p>
            </div>
            <div>
                <input
                    type={"number"}
                    defaultValue={item.qty}
                    min={1}
                    max={99}
                    onChange={(e) => {
                        updateCartItemQty(item, e.target.value);
                    }}
                ></input>
            </div>
            <p>${item.price}</p>
            <p>${priceAddZero(item.price * item.qty)}</p>
            <button
                className="deleteCartItemBtn"
                onClick={() => deleteCartItem(item)}
            >
                X
            </button>
        </div>
    );
}

export default CartItem;
