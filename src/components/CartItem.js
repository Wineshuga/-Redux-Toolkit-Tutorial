import { useDispatch } from "react-redux"
import { ChevronUp, ChevronDown } from "../icon"
import { increaseItem, decreaseItem, removeItem } from "../features/cart/cartSlice"

const CartItem = ({ img, title, price, amount, id }) => {
  const dispatch = useDispatch()
  return (
    <article>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
        <button onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <button onClick={()=>dispatch(increaseItem(id))}>
        <ChevronUp />
      </button>
      {amount}
      <button onClick={()=>dispatch(decreaseItem(id))}>
        <ChevronDown />
      </button>
    </article>
    )
}

export default CartItem