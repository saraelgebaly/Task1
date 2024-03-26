import React from "react";
import "./Testymonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testymonials() {
  return (
    <>
      <div className="container testymonials-section">
        <div className="row">
          <div className="test-dev col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <div>
              <img
                src="2e8d8e4f5e65a3d48109b8bdbea95a8b.png"
                className="test-img"
              />
            </div>
            <dev className>
              <h4>Courtney Henry</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
            </dev>
          </div>
          <div className="test-dev col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <div>
              <img
                src="2e8d8e4f5e65a3d48109b8bdbea95a8b.png"
                className="test-img"
              />
            </div>
            <dev>
              <h4>Courtney Henry</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
            </dev>
          </div>
        </div>
        <div className="row">
          <div className="test-dev col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <dev>
              <img
                src="2e8d8e4f5e65a3d48109b8bdbea95a8b.png"
                className="test-img"
              />
            </dev>
            <div>
              <h4>Courtney Henry</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
            </div>
          </div>
          <div className="test-dev col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <dev>
              <img
                src="2e8d8e4f5e65a3d48109b8bdbea95a8b.png"
                className="test-img"
              />
            </dev>
            <dev>
              <h4>Courtney Henry</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
            </dev>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testymonials;
