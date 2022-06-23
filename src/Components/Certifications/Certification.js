import React, { useState } from "react";
import "./Certification.css";
import certificateData, { fullData } from "./CertificateData";

export default function Certification() {
  const [view, setView] = useState(false);

  const handelCertificate = () => {
    setView((previous) => {
      return !previous;
    });
  };

  return (
    <section id="certifications">
      <h5>My certificate</h5>
      <h2>Certifications</h2>

      <div className="container certificate__container">
        {(view ? fullData : certificateData).map((element) => {
          return (
            <div key={element.id}>
              <h5>{element.year}</h5>

              <span className="line__text">
                <div className="certificate__line"></div>
                <div className="certificate__txt">
                  <h2>{element.title}</h2>
                  <a target="_blank" rel="noreferrer" href={element.link}>
                    View
                  </a>
                </div>
              </span>
            </div>
          );
        })}
        <a onClick={handelCertificate} href className="view__all">
          {!view ? "View All" : "View Less"}
        </a>
      </div>
    </section>
  );
}
