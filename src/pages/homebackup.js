import { NavLink } from "react-router-dom";
function Home() {
    return (
     <>
<div>
  <div className="container-fluid">
    <div className="top">
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img src="./images/amazonlogo.png" alt style={{width: 40}} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="#"><i className="fa-solid fa-house" style={{color: '#FFD43B'}} /> Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/loan">Loan & Legal</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fertilizer">Fertilizer</NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
    {/* Carousel */}
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
        <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/banner1.jpg" alt="Los Angeles" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="./images/banner2.jpg" alt="Chicago" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="./images/banner3.jpg" alt="New York" className="d-block w-100" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </div>
    <div className="row">
      <div className="col-md-3">
        <h3 className="heading">Catagory</h3>
        <ul className="list-group">
          <li className="list-group-item">Electronics</li>
          <li className="list-group-item">Grocerry</li>
          <li className="list-group-item">Fashion</li>
        </ul>
      </div>
      <div className="col-md-9">
        <h3 className="heading">Product</h3>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="./images/img1.jpg" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <p style={{textAlign: 'center'}}><a to="#" className="btn btn-primary">See Profile</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="./images/img2.jpg" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <p style={{textAlign: 'center'}}><a to="#" className="btn btn-primary">See Profile</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="./images/img3.jpg" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <p style={{textAlign: 'center'}}><a to="#" className="btn btn-primary">See Profile</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="./images/img4.jpg" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <p style={{textAlign: 'center'}}><a to="#" className="btn btn-primary">See Profile</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="./images/img4.jpg" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <p style={{textAlign: 'center'}}><a to="#" className="btn btn-primary">See Profile</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="./images/img5.jpg" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <p style={{textAlign: 'center'}}><a to="#" className="btn btn-primary">See Profile</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="./images/img6.jpg" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <p style={{textAlign: 'center'}}><a to="#" className="btn btn-primary">See Profile</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src="./images/img4.jpg" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <p style={{textAlign: 'center'}}><a to="#" className="btn btn-primary">See Profile</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className="ft">cOPYRIGHT</p> 
  </div> 
  {/* Login Modal */}
  <div className="modal" id="login">
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title">Login</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        {/* Modal body */}
        <div className="modal-body">
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">Password:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        {/* Modal footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* SignUp Modal */}
  <div className="modal" id="signup">
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title">Login</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        {/* Modal body */}
        <div className="modal-body">
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">Password:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        {/* Modal footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

     </>
    
    );
  }
  
  export default Home;