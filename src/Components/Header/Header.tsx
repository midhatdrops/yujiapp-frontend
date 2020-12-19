import React from 'react';
import './styles/header.css';

const Header = () => {
   return (
      <div className="container-sl header">
         <div className="row d-flex align-itens-center justify-content-between">
            <div className="col-xl-">
               <div className="dropdown show p-2 ml-5 ">
                  <a
                     className="btn btn-dark dropdown-toggle btn-outline-dark"
                     role="button"
                     id="dropdownMenuLink"
                     data-toggle="dropdown"
                     aria-haspopup="true"
                     aria-expanded="false"
                  >
                     Dropdown link
                  </a>

                  <div
                     className="dropdown-menu"
                     aria-labelledby="dropdownMenuLink"
                  >
                     <a className="dropdown-item" href="/">
                        Action
                     </a>
                     <a className="dropdown-item" href="/">
                        Another action
                     </a>
                     <a className="dropdown-item" href="/">
                        Something else here
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
