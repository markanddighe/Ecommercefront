import './Nav.css'
import { useNavigate } from 'react-router-dom'
import React from "react"
// import { Link } from "react-router-dom";

const Nav =() =>{

  const auth = localStorage.getItem('token')

  const navigate= useNavigate()


  const logout = () =>{

    localStorage.clear()

    navigate('/login')
}


//     return(
//         <div>

// <nav classNameNameName="navbar navbar-expand-lg navbar navbar-light navcolor">
//   <div classNameName="container">
//     <a classNameName="navbar-brand me-2" href="http://localhost:3001/register">
//       <img className="logo"
//         src="https://www.netzcart.com/ncmedia/nccontent/Users.jpg"
        
//         alt="MDB Logo"
//         loading="lazy"
//       />
//     </a>


//     <div className="collapse navbar-collapse" id="navbarButtonsExample">


//     { auth ?  <ul className="nav-ul">

   

//                 <li><Link to="/">Products</Link></li>
//                 <li><Link to="/add"> Add Product</Link></li>


//       <li className="nav-item">
//           <a  onClick={logout} className="nav-link" href="/login">Logout</a>
//       </li>

//             </ul>
//       :

//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//         <li className="nav-item">
//           <a className="nav-link" href="/register">Register</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/login">Login</a>
//         </li>
//       </ul>

//     }
//   </div>
//   </div>

// </nav>
// </div>

//     )


return(
  <div>
<nav className="navbar navbar navbar-light navcol">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">User Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    { auth ?   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/add">Product</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" onClick={logout} href="/login">Logout</a>
        </li>
</ul>
:  
<ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
        </li>
  </ul>
    }
      
    </div>

  </div>
</nav>
  </div>
)
}



export default Nav