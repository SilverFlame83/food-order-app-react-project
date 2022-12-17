import { useContext } from "react";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const itemAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const onCancelItemHandler = id=>{

  }

  const onAddItemHandler = item=>{
    
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove = {onCancelItemHandler.bind(null, item.id) }
          onAdd = {onAddItemHandler.bind(null, item.item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCancel={props.onCancel}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{itemAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCancel} className={styles["button--alt"]}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
