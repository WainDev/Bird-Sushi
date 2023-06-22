function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__card">
          <ul className="footer__block">
            <li>Главная</li>
            <li>Акции</li>
            <li>Меню</li>
            <li>О нас</li>
          </ul>
          <ul className="footer__block">
            <li>Вакансии</li>
            <li>Оферта</li>
            <li>Рестораны</li>
          </ul>
          <ul className="footer__block">
            <li>Москва</li>
            <li className="adress">Казанский вокзал д.5</li>
          </ul>
          <ul className="footer__info">
            <li>
              <h1 className="contact">Контакты</h1>
            </li>
            <li>
              <h4 className="cont__title">Горячая линия</h4>
              <p className="cont__info">+7 (999) 888 77 66</p>
            </li>
            <li>
              <h4 className="cont__title">Вопросы и предложения</h4>
              <p className="cont__info">birdsushi@gmail.com</p>
            </li>
            <li>
              <h4 className="cont__title">Сотрудничество</h4>
              <p className="cont__info">birdsushi@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
