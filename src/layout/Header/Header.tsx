import { NavLink } from 'react-router-dom';

import './Header.css';

const menuItems = [
  { name: 'Compiler', path: '/' },
  { name: 'Actions', path: '/actions' },
];

export const Header = () => {
  return (
    <header>
      {/* Start of meta section */}
      <title>Header Component</title>
      <meta name="author" content="Jane Doe" />
      <link rel="author" href="https://react.dev/" />
      <meta name="keywords" content="There is Header component" />
      {/* End of meta section */}
      <h1>Header</h1>
      <div className="header__menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            className={({ isActive }) =>
              isActive ? 'header__link header__link--active' : 'header__link'
            }
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};
