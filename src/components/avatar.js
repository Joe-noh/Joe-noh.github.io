import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => (
  <StaticImage
    src="../images/avatar.png"
    alt="Joe-noh's avatar"
    placeholder="blurred"
    width={200}
    height={200}
    style={{ borderRadius: "50%" }}
  />
)
export default Image
