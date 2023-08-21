import { useDispatch, useSelector } from "react-redux"
import CartItem from './CartItem';
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, amount, total } = useSelector((store) => store.cart)
  
  if (amount < 1) {
    return (
      <header>
        <h2>Your Bag</h2>
        <p>is currently empty</p>
      </header>
    )
  }

  return (
    <>
      <header>
        <h2>Your Bag</h2>
        <div>
          {cartItems.map((item) => {
            return <CartItem
            key = {item.id}
            {...item}/>;
          })}
        </div>
      </header>
      <footer>
        <hr />
        <p>Total <span>${total}</span></p>
        <button type="button" onClick={() => dispatch(clearCart())}>Clear</button>
      </footer>
    </>
  )
}

export default CartContainer