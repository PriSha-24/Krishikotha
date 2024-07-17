import { useEffect, useState } from "react";
function Top(){
  let [cust_name,setCust_name]=useState("")


  useEffect(()=>{
    var cnn=localStorage.getItem("cn");
    if(cnn!=null){
    setCust_name(cnn)
    }

  },[])
    return(
        <>
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars" />
          </button>
          {/* Topbar Search */}
          
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            {/* Nav Item - Search Dropdown (Visible Only XS) */}
      
              {/* Dropdown - Messages */}
          
      
              
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{cust_name}</span>
                <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
              </a>
              {/* Dropdown - User Information */}
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <div className="dropdown-divider" />
                <a className="dropdown-item" onClick={()=>{
          localStorage.removeItem("cn");
          localStorage.removeItem("cid");
          
          window.location='/'
        }} data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        </>
    )
}

export default Top;