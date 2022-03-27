import React, { useState } from "react"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

// @ts-ignore

import PDF from "../../static/resume.pdf"

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
}

export default function Sample() {
  const [file, setFile] = useState("./Resume.pdf")
  const [numPages, setNumPages] = useState(null)

  function onFileChange(event) {
    setFile(event.target.files[0])
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  return (
    <div className="Example">
      <header>
        <object
          data="../../static/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <iframe
            src="../../static/resume.pdf"
            width="100%"
            height="100%"
          >
            This browser does not support PDFs. Please download the PDF to view
            it:
            <a href="../../static/resume.pdf">Download PDF</a>
          </iframe>
        </object>
      </header>
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>{" "}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document">
          <Document
            file={PDF}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  )
}
