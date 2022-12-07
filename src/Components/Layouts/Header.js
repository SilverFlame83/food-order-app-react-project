import { Fragment } from "react";

import styles from "./Header.module.css";
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return <Fragment>
    <header className={styles.header}>
        <h1>Delicious React Meals</h1>
    <HeaderCartButton>Cart</HeaderCartButton>
    </header>
    <div className={styles['main-image']}>
    <img src={mealsImg}></img>
    </div>
  </Fragment>;
};
export default Header;
