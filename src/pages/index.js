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
			<p className='max-600 text-center p30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam, ut unde aut corporis qui esse maiores ipsum! Fugit minima possimus iste quaerat repudiandae tenetur doloremque sunt illum beatae est.</p>
		</section>
    <section className='h-100vh w-100vw pos-rel overflow'>
			<StaticImage src='../images/image2.jpg' alt='2' className='w-100 h-100 bg-image' />
		</section>
	</Layout>
)

export const Head = () => <Seo title='Home' />

export default IndexPage
