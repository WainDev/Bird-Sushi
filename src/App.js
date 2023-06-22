import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Menu from "./components/Menu";
import Slider from "./components/Slider/Slider";
import Compony from "./components/Compony";
import Opros from "./components/Opros";
import Footer from "./components/Footer";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
const arrs = [{ imageUrl: "" }];

const arr = [
  {
    name: "Голд сет запеченые ",
    price: "894",
    imageUrl: "/img/сет1.png",
  },
  {
    name: "Дабл сет классик ",
    price: "569",
    imageUrl: "/img/сет 2.png",
  },
  {
    name: "Паб сет от шефа ",
    price: "786",
    imageUrl: "/img/сет3.png",
  },
  {
    name: "Game сет от шефа ",
    price: "1245",
    imageUrl: "/img/сет1.png",
  },
  {
    name: "Голд сет запеченые ",
    price: "8974",
    imageUrl: "/img/сет1.png",
  },
  {
    name: "Лайф сет запеченые ",
    price: "8394",
    imageUrl: "/img/сет1.png",
  },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrraper">
      {cartOpened ? <Drawer onCloseCart={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/" element={<Slider />} />
      </Routes>

      <Routes>
        <Route
          path="/menu"
          element={
            <div className="slider__block">
              {/* <img src="/img/bg_slider.png" alt="" className="bg" /> */}
              <div className="slider__container">
                <div className="title__block__info">
                  <h1 className="title__text">Суши сеты</h1>
                  <Link to="/">
                    <div className="title__btn">
                      <img
                        className="btn__back"
                        src="/img/back__btn.svg"
                        alt=""
                      />
                      <p className="btn__text">назад</p>
                    </div>
                  </Link>
                </div>
                <div className="card__block">
                  {arr.map((obj) => (
                    <Card
                      title={obj.name}
                      price={obj.price}
                      imageUrl={obj.imageUrl}
                    />
                  ))}
                </div>
              </div>
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Compony />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Opros />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
