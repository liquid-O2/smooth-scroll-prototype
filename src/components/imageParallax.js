import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ImageParallax({ children }) {
	const wrapperRef = useRef(null)
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		const wrapper = wrapperRef.current
		let gsapContext = gsap.context(() => {
			gsap.utils.toArray(".parallax").forEach(section => {
				gsap.fromTo(
					section,
					{
						yPercent: -30,
					},
					{
						scrollTrigger: {
							trigger: section.parentElement,
							scrub: 0,
						},
						yPercent: 0,
						ease: "none",
					}
				)
			})
		}, wrapper)

		return () => {
			gsapContext.revert()
		}
	}, [])
	return <div ref={wrapperRef}>{children}</div>
}
