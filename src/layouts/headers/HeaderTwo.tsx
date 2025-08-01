import NavMenu from "./Menu/NavMenu"
import { Link } from "react-router-dom"
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import HeaderTwoTop from "./Menu/HeaderTwoTop";
import UseSticky from "../../hooks/UseSticky";

const HeaderTwo = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   return (
      <>
         <header>
            <HeaderTwoTop />
            <div id="header-sticky" className={`header-area header-style-three ${sticky ? "sticky" : ""}`}>
               <div className="large-container">
                  <div className="mega-menu-wrapper">
                     <div className="header-main">
                        <div className="header-left">
                           <div className="header-logo">
                              <Link to="/">
                                 <img src="/assets/imgs/logo/asined-logo.png" alt="header logo" />
                              </Link>
                           </div>
                        </div>
                        <div className="header-right d-flex justify-content-end">
                           <div className="mean__menu-wrapper d-none d-lg-block">
                              <div className="main-menu">
                                 <nav id="mobile-menu">
                                    <NavMenu />
                                 </nav>
                                 <div className="header__hamburger ml-50 d-none">
                                    <button type="button" className="hamburger-btn offcanvas-open-btn">
                                       <span>01</span>
                                       <span>01</span>
                                       <span>01</span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div className="header__hamburger d-xl-block my-auto">
                              <div className="sidebar__toggle">
                                 <a className="bar-icon" onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }}>
                                    <i className="fa-light fa-bars-sort"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas style={true} offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderTwo
