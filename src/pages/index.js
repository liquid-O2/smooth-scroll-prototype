import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
	<Layout>
		<section className='h-100vh w-100vw flex align-center justify-center'>
			<h1>Smooth Scroll Demo using Lenis</h1>
		</section>
		<section className='h-100vh w-100vw pos-rel overflow'>
			<StaticImage src='../images/image1.jpg' alt='1' className='w-100 h-100 bg-image' />
		</section>
		<section className='h-100vh w-100vw flex align-center justify-center'>
			<h2 className='max-600 text-center p20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore dolor, facilis ipsa accusamus inventore eligendi sequi saepe ullam neque esse, exercitationem praesentium officia, voluptas natus est. Quae, quos deserunt?</h2>
		</section>
    <section className='h-100vh w-100vw pos-rel overflow'>
			<StaticImage src='../images/image2.jpg' alt='2' className='w-100 h-100 bg-image' />
		</section>
	</Layout>
)

export const Head = () => <Seo title='Home' />

export default IndexPage
