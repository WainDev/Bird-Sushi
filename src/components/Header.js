import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="wrraper__block">
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src="/img/logo.png" />
            <div className="logo__info">
              <h3 className="logo__table">BIRD-SUSHI</h3>
              <p className="logo__print">Лучший суши ресторан</p>
            </div>
          </div>
        </Link>

        <div className="nav__menu">
          <ul className="navigate__menu">
            <li className="nav__link">
              <a href="#">Меню</a>
            </li>
            <li className="nav__link">
              <a href="#">Москва</a>
            </li>
            <li className="nav__link">
              <a href="#">+7 (999) 888 77 66</a>
            </li>
            <li className="nav__link">
              <a href="#">Войти</a>
            </li>
          </ul>
        </div>

        <div className="button__menu">
          <a onClick={props.onClickCart} href="#" className="btn__link">
            <img src="/img/shop.svg" alt="logo" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
