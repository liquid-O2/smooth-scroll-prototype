import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../scss/site.scss"
import SmoothScroll from "./smoothScroll"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	return (
		<>
			<main>
				<SmoothScroll />
				<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
