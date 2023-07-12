import React from "react"
import { Lenis } from "@studio-freight/react-lenis"

const SCROLL_OPTIONS = {
	duration: 1.25,
	orientation: "vertical",
	easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	smoothWheel: true,
	wheelMultiplier: 1,
	smoothTouch: true,
	touchMultiplier: 2,
	infinite: false,
}

export default function SmoothScroll({ children }) {
	return (
		<Lenis root options={SCROLL_OPTIONS}>
			{children}
		</Lenis>
	)
}
