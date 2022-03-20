import React, { useState } from 'react';

import Image from 'next/image';
import Button from '../components/form/Button';
import Link from 'next/link';
import { Logo, HamburgerMenu, WhiteLogo } from '../public/assets/logo/';
import NavLink from './NavLink';
import navBarLink from '../data/menu';
import classNames from 'classnames';

const style = {
  container: `relative top-1/4 w-full text-left pl-16 md:pl-32 mt-8`,
  item: `text-3xl text-amcovad-white cursor-pointer  hover:amcovad-secondary-100`,
  logo: `absolute top-8 left-8 md:left-20`,
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-amcovad-primary-500`
  }
};

const Menu = ({ children, isMenuOpen }) => {
  return <div className={`${style.menu.default} ${isMenuOpen ? style.menu.open : style.menu.close}`}>{children}</div>;
};

const MenuContainer = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

const MenuItem = ({ title, url }) => {
  return (
    <div className="p-2">
      <Link href={url} passHref>
        <span className={style.item}>{title}</span>
      </Link>
    </div>
  );
};

const Navbar = ({ authPageOnly }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={classNames(
        'z-10 outline-[5px]',
        { 'fixed border-b border-amcovad-primary-200 2xl:mx-auto w-full': !authPageOnly },
        {
          ' lg:hidden w-screen': authPageOnly
        }
      )}
    >
      <div
        className={classNames(
          'py-2 mx-auto px-4 md:max-w-full lg:px-8',
          { 'bg-amcovad-secondary-100 md:px-20 2xl:px-60': !authPageOnly },
          {
            'sm:max-w-xl lg:max-w-screen-xl md:px-24': authPageOnly
          }
        )}
      >
        <div
          className={classNames(
            'relative flex items-center justify-between',
            { 'lg:pl-8 lg:pr-16 ': !authPageOnly },
            {
              'lg:px-20 mt-5': authPageOnly
            }
          )}
        >
          <Link href="/" passHref>
            <a className={classNames({ 'xl:pl-11': !authPageOnly }, 'inline-flex items-center cursor-pointer ')}>
              <Image src={Logo} width="160" height="36" alt="logo" />
            </a>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            {navBarLink.map((data, index) => {
              return <NavLink key={index} title={data.title} url={data.url} />;
            })}
          </ul>
          <ul className="items-center hidden lg:flex">
            <li>
              <Link href="/sign-in">
                <a>
                  <Button outline>Sign in</Button>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sign-up">
                <a>
                  <Button className="text-white ml-4 py-2.5 px-5 ">Try it now</Button>
                </a>
              </Link>
            </li>
          </ul>

          <div className="lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2  -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline "
              onClick={() => setIsMenuOpen(true)}
            >
              <Image src={HamburgerMenu} alt="hamburger icon" />
            </button>
            {setIsMenuOpen && (
              <Menu isMenuOpen={isMenuOpen}>
                <>
                  <div className="relative">
                    <div className={style.logo}>
                      <Image src={WhiteLogo} alt="icon logo" />
                    </div>
                  </div>
                  <button
                    aria-label="Close"
                    className="absolute top-3 right-5 text-5xl text-amcovad-white cursor-pointer "
                    onClick={() => setIsMenuOpen()}
                  >
                    &times;
                  </button>
                  <MenuContainer>
                    {navBarLink.map((data, index) => {
                      return <MenuItem key={index} title={data.title} url={data.url} />;
                    })}
                    <MenuItem url="/sign-up" title="Sign Up" />
                  </MenuContainer>
                </>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
