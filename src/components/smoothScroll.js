import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll() {
	useEffect(() => {
		const body = document.body
		const lenis = new Lenis({ wrapper: body, duration: 1.2 })
		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])
	return null
}
