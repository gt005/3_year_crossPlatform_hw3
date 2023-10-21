function Header() {
    return (
      <header className="grid-container">
        <div className="header__logo">
          <img src="img/logo.svg" alt="logo" />
        </div>
        <div className="header__links">
          <div className="header__link text-large">О нас</div>
          <div className="header__link text-large">Проекты</div>
          <div className="header__link text-large">Материалы</div>
          <div className="header__link text-large">Отзывы</div>
        </div>
        <div className="header__phone text-large">+7 999 999 99 99</div>
      </header>
    );
  }
  
  export default Header;
  