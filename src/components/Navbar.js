import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Welcome to My portfolio Page
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
            <button
              onClick={() =>
                "window.location.href='https://drive.google.com/file/d/1KYaslL0gVTp1BSI5td1BmcrSvBTMxqJd/view?usp=sharing'"
              }
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
