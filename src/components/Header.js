import TransMonitor from '../assets/TransMonitor.svg';
import Search_icon   from '../assets/Search_icon.svg';
import bell from '../assets/bell.svg';
import user_id from '../assets/user_id.svg'
import React from 'react'

export const Header = () => {
  return (
    <header>
      <nav>
        <section className="nav-brand">
          <section className="Brand-nav">
            <img src={ TransMonitor } className="Brand-logo" alt="Brand-logo" />
          </section>

          <section className="Search-nav">
            <img src={ Search_icon } className="Search-logo" alt="Search"/>
            <input className="search__input" placeholder="search..."/>
          </section>
        </section>

        <section className="nav-items">
          <div>
            <a
              className="App-link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>

            <a
              className="App-link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>
          </div>
          
          <div className="">
            <img src={ bell } className="bell" alt="notification bell" />  
          </div>
          <div className="user__id">
            <small>Hello</small>
            <p>Oluwaleke Ojo</p>
          </div>
          <div className="user__img">
            <img src={ user_id } className="" alt="user_id" />  
          </div>       
        </section>
      </nav>
    </header>
  )
}


// export default Header;