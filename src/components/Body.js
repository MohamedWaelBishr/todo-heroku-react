import React from "react";

const Body = ({ title, url, cls, link }) => {
  return (
    <body>
      <section className="basic-grid">
        <a href={`${link}`} style={{ textDecoration: "none" }}>
          <div
            className={`card ${cls}`}
            style={{
              backgroundImage: `url("${url}")`,
            }}
          >
            {title}
          </div>
        </a>
      </section>
    </body>
  );
};

export default Body;
