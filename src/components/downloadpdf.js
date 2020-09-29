import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const DownloadPdf = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Zielinska_Paulina_Resume.pdf" }) {
        publicURL
        name
      }
    }
  `)
  return (
    <>
      <div>
        <a href={data.file.publicURL} download>
          {children}
        </a>
      </div>
    </>
  )
}
export default DownloadPdf
