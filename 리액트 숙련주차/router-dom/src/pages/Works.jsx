import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Works() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  return (
    <div>
      Works
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <Link to="/contect">contect</Link>
    </div>
  );
}

export default Works;
