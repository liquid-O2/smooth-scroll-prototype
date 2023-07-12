import { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll() {
	const [isWindow, setIsWindow] = useState(false)
	useEffect(() => {
		setIsWindow(true)
		const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
		lenis.start()
		return () => {
			lenis.destroy()
			setIsWindow(false)
		}
	}, [isWindow])
	return null
}
