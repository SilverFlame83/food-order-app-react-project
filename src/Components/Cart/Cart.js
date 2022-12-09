import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
const cartItems = (
  <ul className={styles["cart-items"]}>
    {[{ id: "c1", name: "Sushi", amount: 2, price: 12.67 }].map((item) => (
      <li>{item.name}</li>
    ))}
  </ul>
);
const Cart = (props) => {

  return (
    <Modal>
        {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.87</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;