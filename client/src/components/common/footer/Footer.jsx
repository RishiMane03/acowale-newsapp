import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer className="pc">
          <a href="https://github.com/RishiMane03?tab=repositories" className="github" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rishikesh-mane-a295082a3" className="codepen" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <div className="copyright">
              <p> Made by 
                <a href="https://www.linkedin.com/in/rishikesh-mane-a295082a3" target="_blank" rel="noopener noreferrer">
                  <span>&nbsp;Rishi Mane&nbsp;</span>
                </a>
              </p>
          </div>
      </footer>

      <footer className="mobile">
        <a href="https://github.com/RishiMane03?tab=repositories" className="github" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/rishikesh-mane-a295082a3" className="codepen" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <div className="copyright">
            <p> Made by <span>&nbsp;Rishi Mane&nbsp;</span></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
