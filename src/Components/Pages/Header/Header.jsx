import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import photo from "../../../assets/favicon.png";
import { TbMenu2 } from 'react-icons/tb'
function Header() {
	const clickMenu = () =>{
		document.querySelector('.header-left').classList.toggle('toggleBtn')
	}
  const [active, setActive] = useState("home");
  return (
    <>
      <div className="header">
        <div className="header-rigth">
          <Link to="/">
            <img src={photo} alt="uuu" />
          </Link>
          <p>Unicraft — платформа для онлайн обучения </p>
        </div>
        <div className="header-left">
          <ul>
            <li>
              <Link
                onClick={() => setActive("home")}
                className={active === "home" ? "active" : "link"}
                to="/"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActive("platforma")}
                className={active === "platforma" ? "active" : "link"}
                to="/platforma"
              >
                Платформа
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActive("tariflar")}
                className={active === "tariflar" ? "active" : "link"}
                to="/tariflar"
              >
                Тарифы
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActive("kompaniya")}
                className={active === "kompaniya" ? "active" : "link"}
                to="/kompaniya"
              >
                Компания
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActive("quvatlash")}
                className={active === "quvatlash" ? "active" : "link"}
                to="/quvatlash"
              >
                Поддержка
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActive("blog")}
                className={active === "blog" ? "active" : "link"}
                to="/blog"
              >
                Блог
              </Link>
            </li>
            <li>
              <button>RU</button>
            </li>
          </ul>
        </div>
		<button className="menuBtn" onClick={clickMenu}><TbMenu2 className="menubar"/></button>
      </div>
    </>
  );
}

export default Header;
