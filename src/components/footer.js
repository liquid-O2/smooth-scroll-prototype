import * as React from "react"

const Footer = ({ siteTitle }) => (
  <footer className='p20 text-white text-center bg-black'>
    © {new Date().getFullYear()} &middot; Built by
    {` `}
    <a href="https://www.groundcrew.com.au">Groundcrew</a>
  </footer>
)

export default Footer
