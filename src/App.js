import { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCartModal, setCartModal] = useState(false);

  const showCart = () => {
    return setCartModal(true);
  };

  const hideModal = () => {
    return setCartModal(false);
  };
  return (
    <CartProvider>
      {showCartModal && <Cart onCancel={hideModal} />}
      <Header onCartShowed={showCart} />
      <Meals />
    </CartProvider>
  );
}

export default App;
