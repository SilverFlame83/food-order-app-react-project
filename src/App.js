import { Fragment, useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [showCartModal, setCartModal] = useState(false);

  const showCart = () => {
    return setCartModal(true);
  };

  const hideModal = () => {
    return setCartModal(false);
  };
  return (
    <Fragment>
      {showCartModal && <Cart />}
      <Header onCartShowed={showCart} />
      <Meals />
    </Fragment>
  );
}

export default App;
