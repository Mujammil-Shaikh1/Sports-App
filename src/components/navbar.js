import '../App.css';
import {Link} from "react-router-dom"

export default function navbar()
{

    return(
        <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid p-2 ">
    <Link className="navbar-brand fs-4 fw-bolder ms-4 nav-heading" to="/">Track- Sports</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-5">
        <li className="nav-item ms-5">
          <Link className="nav-link  fs-5 nav_head" aria-current="page" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 ms-5 nav_head" to="/product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 ms-5 nav_head" to="/shop">Shop</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link fs-5 ms-5 nav_head" to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 ms-5 nav_head" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 ms-5 nav_head" to="/register">Register/Login</Link>
        </li>
       
        
     
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}