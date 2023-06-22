import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu__block">
      <div className="menu__container">
        <h1 className="title__menu">Наше меню</h1>
        <div className="menu__card__block">
          <Link to="/menu">
            <div className="block__menu__over">
              <img src="/img/set.png" alt="" />
              <h1 className="title__block">СУШИ СЕТЫ</h1>
            </div>
          </Link>
          <div className="block__menu__normal">
            <h1 className="title__block__normal">СОУСЫ</h1>
            <img src="/img/sous.png" alt="" className="sous__normal" />
          </div>
          <div className="block__menu_m1">
            <h3 className="title__block_menu">САЛАТЫ</h3>
            <img src="/img/salat.png" alt="" className="salat" />
          </div>
          <div className="block__menu_m2">
            <h3 className="title__block_menu">ДИСЕРТЫ</h3>
            <img src="/img/disert.png" alt="" className="disert" />
          </div>
          <div className="block__menu_m3">
            <h3 className="title__block_menu">НАПИТКИ</h3>
            <img src="/img/napitok.png" alt="" className="napitok" />
          </div>
          <div className="block__menu_m4">
            <h3 className="title__block_menu">ФАСТ-ФУД</h3>
            <img src="/img/burger.png" alt="" className="burger" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
