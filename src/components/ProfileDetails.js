import React from "react";

function PersonDetails(){
    return(<div>
        <h1 className="name">Anand J Nair</h1>
        <h5 className="occupation">Frontend Developer</h5>
        <a className="website">anand.website</a>

    </div>);
}

export default function ProfileDetail() {
  return (
    <>
      <section className="profile-detail">
        <PersonDetails />
      </section>
    </>
  );
}
