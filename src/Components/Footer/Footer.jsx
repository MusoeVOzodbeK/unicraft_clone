import React from "react";
import { Link } from "react-router-dom";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilVkAlt } from "@iconscout/react-unicons";
import asset78 from "../../assets/asset 78.png";
import asset79 from "../../assets/asset 79.png";
import asset80 from "../../assets/asset 80.png";
import svg1 from "../../assets/badge-appstore-ru.svg";
import svg2 from "../../assets/badge-googleplay-ru.svg";
import svg3 from "../../assets/appgallery.png";
import "./footer.scss";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="tops">
        <p>Есть вопросы? Звоните!</p>
        <a href="#">
          <h1>+7 (495) 532-69-02</h1>
        </a>
        <div className="images">
          <img src={asset78} alt="" />
          <img src={asset79} alt="" />
          <img src={asset80} alt="" />
        </div>
      </div>
      <div className="footer-main">
        <div className="link">
          <div>
            <h4>
              <Link className="links" to="/">Главная</Link>
            </h4>
          </div>
          <div>
            <h4>
              <Link className="links" to="/platforma">Платформа</Link>
            </h4>
            <p>
              <Link className="links" to="/platforma">Функционал</Link>
            </p>
            <p>
              <Link className="links" to="/platforma">Каталог курсов</Link>
            </p>
          </div>
          <div>
            <h4>
              <Link className="links" to="/tariflar">Тарифы</Link>
            </h4>
            <p>
              <Link className="links">Стоимость</Link>
            </p>
            <p>
              <Link className="links">Возможности</Link>
            </p>
            <p>
              <Link className="links">Частые вопросы</Link>
            </p>
          </div>
          <div>
            <h4>
              <Link className="links" to="/kompaniya">Компания</Link>
            </h4>
            <p>
              <Link className="links">О нас</Link>
            </p>
            <p>
              <Link className="links">Отзывы</Link>
            </p>
            <p>
              <Link className="links">Партнерам</Link>
            </p>
            <p>
              <Link className="links">Вакансии</Link>
            </p>
            <p>
              <Link className="links">Контакты</Link>
            </p>
          </div>
          <div>
            <h4>
              <Link className="links" to="/quvatlash">Поддержка</Link>
            </h4>
          </div>
          <div>
            <h4>
              <Link className="links" to="/blog">Блог</Link>
            </h4>
            <p>
              <Link className="links">Стать автором</Link>
            </p>
          </div>
        </div>

        <div className="store">
          <img src={svg1} alt="" />
          <img src={svg2} alt="" />
          <img src={svg3} alt="" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="one">
          <span><a href=""> Договор услуг копирайтинга</a></span>
          <span><a href="">Лицензионное соглашение</a></span>
          <span><a href="">Cогласие на обработку персональных данных</a></span>
        </div>
        <div className="two">
          <span><a href=""> Политика конфиденциальности</a></span>
          <span><a href=""> Соглашение об использовании курсов</a></span>
        </div>
        <div className="social-media">
          <div>
            <a href="#">
              <UilInstagram className="icon"/>
            </a>
            <a href="#">
              <UilVkAlt className="icon"/>
            </a>
            <a href="#">
              <UilFacebookF className="icon"/>
            </a>
          </div>
          <p>Unicraft © 2016-2022</p>
        </div>
      </div>
    </div>
  );
};
