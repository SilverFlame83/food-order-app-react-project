import { useContext } from "react";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";


const cartCtx = useContext(CartContext);

const cartItems = (
  <ul className={styles["cart-items"]}>
    {cartCtx.map((item) => (
      <li>{item.name}</li>
      ))}
  </ul>
);
const Cart = (props) => {

  return (
    <Modal onCancel={props.onCancel}>
        {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.87</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCancel} className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
