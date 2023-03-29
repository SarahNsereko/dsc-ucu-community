import React from "react";
import { Link } from "react-router-dom";

function Home() {
    
  return (
    <div>
    This is the Home page
    <Link to='/login' >LOGIN</Link>
    </div>
  );
}

export default Home;