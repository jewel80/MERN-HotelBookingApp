import React from "react";

function Navbar() {

  function logout() {
    localStorage.removeItem('currentUser')
    window.location.href='/login'
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">
          The Cox Today
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><i className='fa fa-bars' style={{color: 'white'}}></i></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ml-auto">
            {localStorage.getItem('currentUser') ? (
              <div class="dropdown mr-5">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-user" aria-hidden="true"></i>  {JSON.parse(localStorage.getItem('currentUser')).name} 
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="/profile">Profile</a>
                <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
              </div>
            </div>

            ) : (
              <>
              <li class="nav-item active">
                <a class="nav-link" href="/register">
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
              </>
              )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;










// import React from "react";

// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             SHEY ROOMS
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/register">
//                   Register
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/login">
//                   Login
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
