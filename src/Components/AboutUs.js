import "./AboutUs.css";
import Where from "./Where";

function AboutUs() {
  return (
    <>
      <div className="container about-section ">
        <div className="dev-left col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <img src="5ab4770fb0ff3123d0ae01db31c409a7.jpeg" />
          <div className="dev-absolute">
            <h1>About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <img src="fd6f05b7e4f0277ac5571d9a15a12ddb.png" />
          </div>
        </div>
        <Where />
      </div>
    </>
  );
}
export default AboutUs;
