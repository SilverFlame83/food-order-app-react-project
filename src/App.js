import { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import CartContext from "./store/cart-context";

function App() {
  const [showCartModal, setCartModal] = useState(false);

  const showCart = () => {
    return setCartModal(true);
  };

  const hideModal = () => {
    return setCartModal(false);
  };
  return (
    <CartContext>
      {showCartModal && <Cart onCancel={hideModal}/>}
      <Header onCartShowed={showCart} />
      <Meals />
    </CartContext>
  );
}

export default App;
