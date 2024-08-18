import React from "react";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png"></img>
        <h2>Jesse Katsopolis</h2>
        <p>The next Elvis.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png"></img>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png"></img>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png"></img>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="img1.jpg"></img>
                <span>photo_2024_06.png</span>
              </div>
            <img src="./download.png" className="icon"></img>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png"></img>
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" >Logout</button>
      </div>
    </div>
  );
};

export default Detail;
