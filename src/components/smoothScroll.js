import React, { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll({ children }) {
	useEffect(() => {
		const lenis = new Lenis({ duration: 1.2 })

		lenis.on("scroll", e => {
			console.log(e)
		})

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])
	return null
}
