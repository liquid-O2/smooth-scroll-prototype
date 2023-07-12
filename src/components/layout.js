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
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<SmoothScroll>
				<main>{children}</main>
			</SmoothScroll>
			<Footer />
		</>
	)
}

export default Layout
