function Card(props) {
  return (
    <div>
      <div className="card__item">
        <img src={props.imageUrl} alt="" className="set" />
        <div className="item__info">
          <h3 className="item__title">{props.title}</h3>
          <p className="item__print">Запеченые суши 30г рыбы ...</p>
        </div>
        <div className="item__btns">
          <h4 className="item__price">{props.price} руб.</h4>
          <div className="item__buy__btn">
            <p className="btn__title">В корзину</p>
          </div>
        </div>
      </div>
    </div>
    // style={{ display: "none" }}
  );
}

export default Card;
