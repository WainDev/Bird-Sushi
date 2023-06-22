function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="header__card">
          <h2>Корзина</h2>
          <div onClick={props.onCloseCart} className="header__close">
            <img src="/img/close.png" alt="" className="close" />
          </div>
        </div>

        <div className="items">
          <div className="card__item">
            <img src="/img/сет1.png" alt="" className="set" />
            <div className="item__info">
              <h3 className="item__title">Голд сет запеченые </h3>
              <p className="item__print">Запеченые суши 30г рыбы ...</p>
              <div className="cart__info">
                <p>529 руб</p>
                <img src="/img/delete.png" alt="" className="delete" />
              </div>
            </div>
          </div>
          <div className="card__item">
            <img src="/img/сет1.png" alt="" className="set" />
            <div className="item__info">
              <h3 className="item__title">Голд сет запеченые </h3>
              <p className="item__print">Запеченые суши 30г рыбы ...</p>
              <div className="cart__info">
                <p>529 руб</p>
                <img src="/img/delete.png" alt="" className="delete" />
              </div>
            </div>
          </div>
          <div className="card__item">
            <img src="/img/сет1.png" alt="" className="set" />
            <div className="item__info">
              <h3 className="item__title">Голд сет запеченые </h3>
              <p className="item__print">Запеченые суши 30г рыбы ...</p>
              <div className="cart__info">
                <p>529 руб</p>
                <img src="/img/delete.png" alt="" className="delete" />
              </div>
            </div>
          </div>
          <div className="card__item">
            <img src="/img/сет1.png" alt="" className="set" />
            <div className="item__info">
              <h3 className="item__title">Голд сет запеченые </h3>
              <p className="item__print">Запеченые суши 30г рыбы ...</p>
              <div className="cart__info">
                <p>529 руб</p>
                <img src="/img/delete.png" alt="" className="delete" />
              </div>
            </div>
          </div>
          <div className="card__item">
            <img src="/img/сет1.png" alt="" className="set" />
            <div className="item__info">
              <h3 className="item__title">Голд сет запеченые </h3>
              <p className="item__print">Запеченые суши 30г рыбы ...</p>
              <div className="cart__info">
                <p>529 руб</p>
                <img src="/img/delete.png" alt="" className="delete" />
              </div>
            </div>
          </div>
          <div className="card__item">
            <img src="/img/сет1.png" alt="" className="set" />
            <div className="item__info">
              <h3 className="item__title">Голд сет запеченые </h3>
              <p className="item__print">Запеченые суши 30г рыбы ...</p>
              <div className="cart__info">
                <p>529 руб</p>
                <img src="/img/delete.png" alt="" className="delete" />
              </div>
            </div>
          </div>
        </div>

        <ul className="pay_cart">
          <li className="info__pay">
            <p>К оплате</p>
            <p>569 руб</p>
          </li>
        </ul>
        <div className="pay__btn">
          <div className="cart__btn">
            <p>Оплатить</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
