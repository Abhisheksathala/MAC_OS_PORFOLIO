import React from 'react';
import { navLinks, navIcons } from '#constants';
import dayjs from 'dayjs';

const NavBar = () => {
  return (
    <nav>
      <div className="">
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Abhiske's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon" />
            </li>
          ))}
        </ul>
        <time datetime="">{dayjs().format('ddd MMM D h:mm A')}</time>
      </div>
    </nav>
  );
};

export default NavBar;
