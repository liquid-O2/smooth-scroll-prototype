import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import HeroVideo from "../images/hero-video.mp4"

const IndexPage = () => (
	<Layout>
		<section className='h-100vh w-100vw flex flex-col align-center justify-center pos-rel overflow'>
			<h1 className='pos-rel z-2 text-white'>Smooth Scroll Prototype</h1>
			<video loop muted autoPlay className='w-100 h-100 bg-image parallax'>
				<source src={HeroVideo} type='video/mp4' />
			</video>
		</section>
		<section className='w-100vw flex flex-col align-center justify-center mtf mbf m-my80'>
			<p className='max-600 text-center p40 mbf m-mb80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam, ut unde aut corporis qui esse maiores ipsum! Fugit minima possimus iste quaerat repudiandae tenetur doloremque sunt illum beatae est.</p>
			<div className='grid w-100 p20'>
				<div className='pos-rel overflow aspect-1-2 w-50 m-100 max-h-300 mta'>
					<StaticImage src='../images/image4.jpg' alt='1' className='w-100 h-100 bg-image parallax' />
				</div>
				<div className='pos-rel overflow aspect-1-2 w-80 m-100 mla'>
					<StaticImage src='../images/image5.jpg' alt='1' className=' bg-image parallax' />
				</div>
				<div className='pos-rel overflow aspect-16-9 col-span-2 w-100 h-100'>
					<StaticImage src='../images/image3.jpg' alt='1' className=' bg-image parallax' />
				</div>
			</div>
		</section>
		<section className='h-100vh w-100vw pos-rel overflow bg-black flex flex-col align-center justify-center'>
			<p className='pos-rel z-2 max-600 text-center p40 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam, ut unde aut corporis qui esse maiores ipsum! Fugit minima possimus iste quaerat repudiandae tenetur doloremque sunt illum beatae est.</p>
			<button className='pos-rel z-2'>Read More</button>
			<StaticImage src='../images/image2.jpg' alt='1' className='bg-image parallax darken' />
		</section>
	</Layout>
)

export const Head = () => <Seo title='Home' />

export default IndexPage
