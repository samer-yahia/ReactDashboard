import React from 'react';
import './sidebar.css';
import navList from '../../data/navItems';

function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {navList.map(nav => (
          <li className="nav-item" key={nav._id}>
            <a href="#" className="nav-link collapsed" data-bs-target={`#${nav._id}-nav`} data-bs-toggle="collapse">
            <i className={nav.icon1}></i>
              <span>{nav.listName}</span>
              <i className={nav.icon2}></i>
              {nav.submenu && nav.submenu.length > 0 }
            </a>

            {nav.submenu && nav.submenu.length > 0 && (
              <ul id={`${nav._id}-nav`} className='nav-content collapse' data-bs-parent="#sidebar-nav">
                {nav.submenu.map(sub => (
                  <li key={sub._id}>
                    <a href={sub.link}>
                      <i className={sub.icon}></i>
                      <span>{sub.listName}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

