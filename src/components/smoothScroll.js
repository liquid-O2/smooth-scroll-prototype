import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll() {
	useEffect(() => {
		const main = document.querySelector("main")
		const lenis = new Lenis({ wrapper: main, duration: 1.2, smoothWheel: true, normalizeWheel: true })
		function raf(time) {
			if (lenis) {
				lenis.raf(time)
				requestAnimationFrame(raf)
			}
		}
		requestAnimationFrame(raf)

		return () => lenis.destroy()
	}, [])
	return null
}
