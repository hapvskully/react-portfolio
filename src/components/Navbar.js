import React from "react";
import { NavLink } from "react-router-dom";

function About(){
return (
   <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container" id="nav-name">
  <NavLink className="navbar-brand" to="/">Hillary Vos</NavLink>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
       <NavLink className="nav-link" activeClassName="active" to="/"><u>About</u></NavLink>
      </li>
      <li class="nav-item">
       <NavLink className="nav-link" activeClassName="active" to="/contact"><u>Contact</u></NavLink>
      </li>
      <li class="nav-item">
       <NavLink className="nav-link" activeClassName="active" to="/portfolio"><u>Portfolio</u></NavLink>
      </li>
    </ul>
  </div>
</div>
</nav>

   </>
   )
}
export default About;


