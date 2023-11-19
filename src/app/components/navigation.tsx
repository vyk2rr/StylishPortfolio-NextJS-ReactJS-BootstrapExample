"use client"

import { useEffect, useState } from "react"

export default function Navigation(): JSX.Element {
  const [active, setActive] = useState(false);

  useEffect(() => {
    
  }, [active]);

  return (
    <>
      <a
        className={`menu-toggle rounded ${active ? 'active' : ''}`}
        onClick={() => setActive(!active)}
      >
        <i className={`fa ${active ? 'fa-times' : 'fa-bars'}`} />
      </a>
      <nav
        className={`navbar navbar-expand navbar-light ${active ? 'active' : ''}`}
        id="sidebar-wrapper"
      >
        <div className="container">
          <div className="navbar-collapse">
            <ul className="navbar-nav sidebar-nav" id="sidebar-nav">
              <li className="nav-item sidebar-brand">
                <a className="nav-link active js-scroll-trigger" href="#page-top" onClick={() => setActive(false)}>Brand</a>
              </li>
              <li className="nav-item sidebar-nav-item">
                <a className="nav-link js-scroll-trigger" href="#page-top"  onClick={() => setActive(false)}>Home</a>
              </li>
              <li className="nav-item sidebar-nav-item">
                <a className="nav-link js-scroll-trigger" href="#about" onClick={() => setActive(false)}>About</a>
              </li>
              <li className="nav-item sidebar-nav-item">
                <a className="nav-link js-scroll-trigger" href="#services" onClick={() => setActive(false)}>Services</a>
              </li>
              <li className="nav-item sidebar-nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio" onClick={() => setActive(false)}>Portfolio</a>
              </li>
              <li className="nav-item sidebar-nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact" onClick={() => setActive(false)}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>   
  )
}