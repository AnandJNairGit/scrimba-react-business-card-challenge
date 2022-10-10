import React from "react";
import email from "../assets/email.png";
import twitter from "../assets/Twitter.png";
import linked from "../assets/linked.png";

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
      </section>
    </>
  );
}
