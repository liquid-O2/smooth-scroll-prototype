import React from "react"
import { Lenis, useLenis } from "@studio-freight/react-lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SCROLL_OPTIONS = {
	duration: 1.2,
	orientation: "vertical",
	easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	smoothWheel: true,
	wheelMultiplier: 1,
	smoothTouch: true,
	touchMultiplier: 2,
	infinite: false,
}

export default function SmoothScroll({ children }) {
	const lenis = useLenis(() => {
		ScrollTrigger.update()
	})

	return (
		<Lenis root options={SCROLL_OPTIONS}>
			{children}
		</Lenis>
	)
}
