import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { connectWeb3, address } = props;
  const [scroll, setScroll] = useState(false);

  useEffect(() =>
    window.addEventListener('scroll',
      () => setScroll( window.pageYOffset > 50)
    ), []);

  return (
    <header className={"header " + (scroll ? "_scroll" : "")}>
      <div className="header__main">
        <label className="header__sidebar-open" htmlFor="sidebar-menu-activation">
          <i className="icon icon-menu" />
        </label>
        <nav className="header__menu">
          <Link className="header__menu-item" to="/">
            Home
          </Link>
          <Link className="header__menu-item" to="/about">
            About as
          </Link>
          <Link className="header__menu-item" to="/blog">
            Blog
          </Link>
        </nav>
        <div className="header__title">#Berezka DAO - DeFi Asset Management</div>
      </div>
      <div className="buttons">
        {address ? (
          <a className="button _light" href>
            {address}
          </a>
        ) : (
          <a className="button _light" href onClick={connectWeb3}>
            Connect wallet
          </a>
        )}
        <Link className="button _light" to="/account">
          My Account
        </Link>
        <Link className="button" to="/request">
          Join Dao
        </Link>
      </div>
    </header>
  );
}

export default Header;
