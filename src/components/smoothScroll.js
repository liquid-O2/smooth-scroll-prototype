import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll() {
	useEffect(() => {
		const lenis = new Lenis({ duration: 1.2 })
		function raf() {
			lenis.raf(20)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])
	return null
}
