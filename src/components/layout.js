import * as React from "react"
import Footer from "./footer"
import "../scss/site.scss"
import SmoothScroll from "./smoothScroll"
import ImageParallax from "./imageParallax"

const Layout = ({ children }) => {
	return (
		<SmoothScroll>
			<ImageParallax>
				<main>{children}</main>
				<Footer />
			</ImageParallax>
		</SmoothScroll>
	)
}

export default Layout
