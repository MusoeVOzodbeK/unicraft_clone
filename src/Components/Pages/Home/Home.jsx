import React from "react";
import "./home.css";
import Tilt from "react-parallax-tilt";
import photo1 from "../../../assets/photo_2022-09-29_22-40-33.jpg";
import photo2 from "../../../assets/photo_2022-09-29_22-39-43.jpg";
import asset13 from "../../../assets/asset 13.png";
import asset15 from "../../../assets/asset 15.png";
import asset17 from "../../../assets/asset 17.png";
function Home() {
  return (
    <>
      <div className="home">
        <div className="top">
          <video autoPlay loop muted plays- className="back-video">
            <source
              src="https://player.vimeo.com/external/660278794.hd.mp4?s=e4deeeb47bb419b5443c34fa7f0c89b7a31642c9&profile_id=174"
              type="video/mp4"
            />
          </video>
          <div>
            <h1>Платформа для онлайн обучения</h1>
            <p>
              Запусти обучение сотрудников сейчас, следуя простым инструкциям
            </p>
            <button>Попробовать бесплатно </button>
          </div>
        </div>
        <div className="main">
          <div className="aaaa">
            <h1>Unicraft доверяют лидеры</h1>
            <div className="image">
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1>Интуитивное управление</h1>
          <div>
            <article>
              <h1>1</h1>
              <div>
                <Tilt tiltAxis={'y'}>
                  <div className="imageOne">
                    <img src={asset13} alt="" />
                  </div>
                </Tilt>
                <h3>Загрузи материалы</h3>
                <p>Работай с привычными форматами прямо на платформе</p>
              </div>
            </article>
            <article>
              <h1>2</h1>
              <div>
                <Tilt tiltAxis={'y'}>
                  <div className="imageTwo">
                    <img src={asset15} alt="" />
                  </div>
                </Tilt>
                <h3>Загрузи материалы</h3>
                <p>Работай с привычными форматами прямо на платформе</p>
              </div>
            </article>
            <article>
              <h1>3</h1>
              <div>
                <Tilt tiltAxis={'y'}>
                  <div className="imageThree">
                    <img src={asset17} alt="" />
                  </div>
                </Tilt>
                <h3>Загрузи материалы</h3>
                <p>Работай с привычными форматами прямо на платформе</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
