import React from 'react';
import logo from '../assets/icons/logo.svg';
interface Props {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
}
export const Header = ({ setShowMenu, showMenu }: Props) => {
  const handleClick = (): void => {
    setShowMenu((prev) => !prev);
  };
  return (
    <nav className="nav">
      {showMenu ? (
        <svg
          className="nav__menu-x"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          onClick={handleClick}>
          <path d="M19.3599 0.89502L11.4043 8.84877L3.45057 0.89502L0.799316 3.54627L8.75307 11.5L0.799316 19.4538L3.45057 22.105L11.4043 14.1513L19.3599 22.105L22.0112 19.4538L14.0574 11.5L22.0112 3.54627L19.3599 0.89502Z" />
        </svg>
      ) : (
        <svg
          className="nav__menu"
          width="25"
          height="16"
          viewBox="0 0 25 16"
          onClick={handleClick}>
          <path
            className="nav__menu-path"
            d="M0 0H25V2.66667H0V0ZM0 6.66667H25V9.33333H0V6.66667ZM0 13.3333H25V16H0V13.3333Z"
          />
        </svg>
      )}

      <img className="nav__logo-img" src={logo} alt="logo" loading="lazy" />
      <svg
        className="nav__search-icon"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        onClick={handleClick}>
        <path d="M8 16C9.846 16 11.543 15.365 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" />
      </svg>
    </nav>
  );
};
