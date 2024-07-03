import React from 'react';
import smileEmoji from '../../../images/smileEmoji.png';
import glassesEmoji from '../../../images/glassesEmoji.jpg';

function NavMessage() {
  return (
    <li className="nav_item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">2</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 2 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>

        <li>
          <hr className="dropwdown-divider" />
        </li>

        <li className="message-item">
          <a href="#">
            <img src={smileEmoji} alt="test" className='rounded-circle' />

            <div>
              <h4>Maria Hudson</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae labore officia est ut...
              </p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="#">
            <img src={glassesEmoji} alt="test" className='rounded-circle' />

            <div>
              <h4>Anna Nelson</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae labore officia est ut...
              </p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>

      </ul>
    </li>
  )
}

export default NavMessage