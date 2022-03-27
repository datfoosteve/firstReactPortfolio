import React from "react"
import Img from "../images/resume1024_1.png"
import Img2 from "../images/resume1024_2.png"
export default function Resume() {
  return (
    <div className="Example">
      <header>
        <object
          data="https://github.com/datfoosteve/firstReactPortfolio/blob/3197ca7ed9575490dbdba08ef99b3c69fa2c8568/static/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <iframe src="Img" width="100%" height="100%">
            <iframe src="Img2" width="100%" height="100%">
              <iframe
                src="https://github.com/datfoosteve/firstReactPortfolio/blob/3197ca7ed9575490dbdba08ef99b3c69fa2c8568/static/resume.pdf"
                width="100%"
                height="100%"
              >
                This browser does not support PDFs. Please download the PDF to
                view it:
                <a href="https://github.com/datfoosteve/firstReactPortfolio/blob/3197ca7ed9575490dbdba08ef99b3c69fa2c8568/static/resume.pdf">
                  Download PDF
                </a>
              </iframe>
            </iframe>
          </iframe>
        </object>
      </header>
    </div>
  )
}
