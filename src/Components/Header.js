import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="container header">
        <div className="row">
          <div className="left col-lg-9 col-md-6 col-sm-12 col-xs-12 ">
            <img src="bcd4ea40fd6f4f4dff686cafacecaf9e.jpeg" />
          </div>
          <div className="right col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="div1">
              <h3>
                ROUND ROCK
                <br />
                <h5>Trash Hauling</h5>
              </h3>

              <button className="btn1">Experts</button>
            </div>
            <div className="div2">
              <h2>Lorem</h2>
              <h1>Lorem Lorem</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </div>
            <button className="btn2">Help Me</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
