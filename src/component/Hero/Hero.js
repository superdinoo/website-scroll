import React, { useState } from "react";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="contentBack">
          <div className="col">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">Online business</span>
            </h1>

            <div className="usedBy">
              <p>USED BY</p>
              <div className="icons">
                <span>
                  <FaDatabase />
                  Staxx
                </span>
                <span>
                  <FaAsterisk />
                  Star AI
                </span>
                <span>
                  <FaAccusoft />
                  Accusoft
                </span>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="formLayout">
              <div className="formContainer">
                <p className="signInTxt">Sign in</p>
                <div className="socialLogin">
                  <span>
                    {" "}
                    <FaFacebook size={20} />{" "}
                  </span>
                  <span>
                    <FaTwitter size={20} />
                  </span>
                  <span>
                    <FaGithub size={20} />
                  </span>
                </div>
                <div className="divader">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Password" />
                  <button>Create Your Account</button>
                </form>
              </div>
              <div className="formFooter">
                <p>
                  By signing up, you agree to our
                  <span className="primary-color">
                    {" "}
                    Terms, Data Policy
                  </span> and{" "}
                  <span className="primary-color"> Cookies Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
