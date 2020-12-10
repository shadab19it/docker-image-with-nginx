import React from "react";
import BrandLogo from "./assests/logo.png";
import Img1 from "./assests/img1.png";
import Img2 from "./assests/img2.png";
import Img3 from "./assests/img3.png";
import Thumb1 from "./assests/thumb1.png";
import Thumb2 from "./assests/thumb2.png";
import Thumb3 from "./assests/thumb3.png";
import "./Starbucks.scss";

const Startbucks = () => {
  const [image, setImage] = React.useState({
    buck: Img1,
    bgColor: "green",
  });
  return (
    <div className='star-bugs-container'>
      <header>
        <div className='left-side'>
          <div className='brand-logo'>
            <img src={BrandLogo} alt='brand-logo' />
          </div>
        </div>
        <div className='right-side'>
          <ul className='nav'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Menu</a>
            </li>
            <li>
              <a href='#'>What's New</a>
            </li>
            <li>
              <a href='#'>Contect</a>
            </li>
          </ul>
        </div>
      </header>
      <div className='main-section'>
        <div className='row'>
          <div className='col-1 text-content'>
            <h2>It's not just Coffee </h2>
            <h2>
              It's <span className='brand-name'>Starbucks</span>{" "}
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vero aliquid a porro fugit dolorem vitae hic numquam ad animi
              obcaecati placeat laboriosam est illo exercitationem consectetur, eveniet laudantium. Deserunt temporibus eos qui explicabo
              facilis veniam delectus ex aliquid ad.
            </p>
            <button className='learn-btn'>LEARN MORE</button>
          </div>
          <div className='col-2 img-content'>
            <div className='img-buck'>
              <img src={image.buck} alt='' />
            </div>
            <div className='social-icon'>{/* <ul>
                <li></li>
              </ul> */}</div>
            <div className='circle' style={{ backgroundColor: `${image.bgColor}` }}></div>
          </div>
        </div>
      </div>
      <footer>
        <ul className='thumbs'>
          <li onClick={() => setImage({ buck: Img1, bgColor: "green" })}>
            <img src={Thumb1} alt='' />
          </li>
          <li onClick={() => setImage({ buck: Img2, bgColor: "#fcb1b1" })}>
            <img src={Thumb2} alt='' />
          </li>
          <li onClick={() => setImage({ buck: Img3, bgColor: "pink" })}>
            <img src={Thumb3} alt='' />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Startbucks;
