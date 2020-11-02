import overviewIcon from '../assets/overviewIcon.svg';
import wallet_1 from '../assets/wallet_1.svg';
import wallet_2 from '../assets/wallet_2.svg';
import wallet_3 from '../assets/wallet_3.svg';
import manual_record_icon from '../assets/manual_record_icon.svg';
import list_icon from '../assets/list_icon.svg';
import list_cancel from '../assets/list_cancel.svg';
import list_checked from '../assets/list_checked.svg';
import user_icon from '../assets/user_icon.svg';
import React from 'react'

export const Navbar = () => {
  return (
    <aside>
      <section  className="first__section">
        <button className="btn btn-primary">GENERATE INVOICE</button>
      </section>

      <section className="second__section mb-3">
        <p>Main</p>
        <nav>
          <ul className="nav--items">
            <li className="nav-links active">
              <img src={ overviewIcon } className="icons" alt="icon"/>
              Overview
            </li>
          </ul>
        </nav>
      </section>

      <section className="second__section third--section">
        <p>Payments</p>
        <nav>
          <ul className="nav--items">
            <li className="nav-links">
              <img src={ wallet_1 } className="icons" alt="icon"/>
              All Payments
            </li>
            <li className="nav-links">
              <img src={ wallet_2 } className="icons" alt="icon"/>
              Reconcilled Payments
            </li>
            <li className="nav-links">
              <img src={ wallet_3 } className="icons" alt="icon"/>
              Un - Reconcilled Payments
            </li>
            <li className="nav-links">
              <img src={ manual_record_icon } className="icons" alt="icon"/>
              Manual Settlement
            </li>
          </ul>
        </nav>
      </section>

      <section className="second__section fourth--section">
        <p>Orders</p>
        <nav>
          <ul className="nav--items">
            <li className="nav-links">
              <img src={ list_icon } className="icons" alt="icon"/>
              All Orders
            </li>
            <li className="nav-links">
              <img src={ list_cancel } className="icons" alt="icon"/>
              Pending Orders
            </li>
            <li className="nav-links">
              <img src={ list_checked } className="icons" alt="icon"/>Reconcilled Orders
            </li>
            <li className="nav-links">
              <img src={ user_icon } className="icons" alt="icon"/>Merchant Profile
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  )
}


// export default Header;