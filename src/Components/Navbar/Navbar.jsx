import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid mx-5 px-5">


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="home" >
                  <i className="fa-solid fa-house-chimney basic-background italic px-2 py-1" />

                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='misrnews' className="nav-link">
                  أخبار مصر
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="policy" className="nav-link" >
                  سياسة
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="sports" className="nav-link" >
                  رياضة
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="economics" className="nav-link" >
                  اقتصاد
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="culture" className="nav-link" >
                  ثقافة وفنون
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="events" className="nav-link" >
                  حوادث
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="provinces" className="nav-link" >
                  محافظات
                </NavLink>
              </li>


            </ul>

          </div>
          <i className="fa-solid fa-bars  italic px-2 py-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          ...
        </div>

      </div>

    </div>

  )
}
