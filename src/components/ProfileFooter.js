import React from "react";
import twitter from "../assets/Twitter.png"
import facebook from "../assets/facebook.png"
import insta from "../assets/insta.png";
import gitHub from "../assets/git.png";

export default function ProfileFooter() {
  return (
    <div className="profile-footer">
        <img src={twitter} />
        <img src={facebook} />
        <img src={insta} />
        <img src={gitHub} />

    </div>
  );
}
