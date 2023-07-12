import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../scss/site.scss"
import SmoothScroll from "./smoothScroll"

const Layout = ({ children }) => {
	const [isServer, setIsServer] = React.useState(true)

	React.useEffect(() => {
		setIsServer(false)

		return () => setIsServer(true)
	}, [])

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
			<main>
				{!isServer && <SmoothScroll />}
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
