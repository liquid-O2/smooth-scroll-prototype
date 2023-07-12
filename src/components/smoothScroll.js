import React from "react"
import { Lenis as ReactLenis } from "@studio-freight/react-lenis"

export default function SmoothScroll({ children }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 1.125,
				dorientation: "vertical",
				easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				smoothWheel: true,
				wheelMultiplier: 1,
				smoothTouch: true,
				touchMultiplier: 2,
				infinite: false,
			}}>
			{children}
		</ReactLenis>
	)
}
