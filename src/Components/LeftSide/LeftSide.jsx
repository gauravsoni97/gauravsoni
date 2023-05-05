import React from "react";

const LeftSide = () => {
  return (
    <div>
      <div className="top__section">
        <img src="" alt="" />
        <h1 className="my__name">Gaurav Soni</h1>
        <h2 className="my__role">Frontend Developer</h2>
      </div>
      <div className="bottom__section">
        <div className="direct__link">
          <div className="gradientBox">{/* icon */}</div>
          <div className="link__for">
            <div className="link__label">Email</div>
            <div className="link__content">Gauravsoni8414@gmail.com</div>
          </div>
        </div>
        <div className="direct__link">
          <div className="gradientBox">{/* icon */}</div>
          <div className="link__for">
            <div className="link__label">Phone No.</div>
            <div className="link__content">8053340056</div>
          </div>
        </div>
        <div className="direct__link">
          <div className="gradientBox">{/* icon */}</div>
          <div className="link__for">
            <div className="link__label">Address</div>
            <div className="link__content">Rajasthan, India</div>
          </div>
        </div>
        <div className="other__links"></div>
      </div>
    </div>
  );
};

export default LeftSide;
