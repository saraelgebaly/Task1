import React from "react";
import "./Services.css";
function Services() {
  return (
    <>
      <div className="container card-section1">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="card card-dev shadow bg-white rounded">
              <img
                src="b51e46d3d5bb005d1e122864372c48f7.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="card shadow bg-white rounded">
              <img
                src="fba758a9dda73825ff383b42c06233e8.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="card shadow bg-white rounded">
              <img
                src="5c96be21672060676b836291c441e6b3.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lorem Ipsum</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn3">Help Me</button>
    </>
  );
}

export default Services;
