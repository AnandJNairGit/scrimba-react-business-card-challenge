import React from "react";
import email from "../assets/email.png";
import twitter from "../assets/Twitter.png";
import linked from "../assets/linked.png";

function Info() {
  return (
    <div className="info-container">
      <div>
        <h2 className="info-title">About</h2>
        <p className="info-para">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div>
        <h2 className="info-title">Intrests</h2>
        <p className="info-para">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

function PersonDetails() {
  return (
    <div className="person-detail-container">
      <h1 className="name">Anand J Nair</h1>
      <h5 className="occupation">Frontend Developer</h5>
      <a className="website">anand.website</a>
    </div>
  );
}

function ConnectButtons() {
  return (
    <div className="buttons">
      <button className="email-btn">
        <img className="button-icon" src={email} /> <p>Email</p>
      </button>
      <button className="linkedIn-btn">
        <img className="button-icon" src={linked} /> <p>LinkedIn</p>
      </button>
    </div>
  );
}

export default function ProfileDetail() {
  return (
    <>
      <section className="profile-detail">
        <PersonDetails />
        <ConnectButtons />
        <Info />
      </section>
    </>
  );
}
