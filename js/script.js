document.addEventListener("DOMContentLoaded", () => {
	const rippleContainer = document.querySelector(".ripple-container")
	const numberElements = document.querySelectorAll(".number")
	let isCounting = false

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	}

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				rippleContainer.classList.add("in-view")
				if (!isCounting) {
					numberElements.forEach((numberElement) => {
						const target = parseInt(
							numberElement.getAttribute("data-target"),
							10
						)
						animateNumber(numberElement, 0, target, 2000)
					})
					isCounting = true
				}
			} else {
				rippleContainer.classList.remove("in-view")
				isCounting = false // Reset for re-entrance if needed
			}
		})
	}, options)

	observer.observe(rippleContainer)

	function animateNumber(element, start, end, duration) {
		let startTime = null

		function animate(currentTime) {
			if (startTime === null) startTime = currentTime
			const elapsedTime = currentTime - startTime
			const progress = Math.min(elapsedTime / duration, 1)
			const currentNumber = Math.floor(progress * (end - start) + start)
			element.textContent = currentNumber

			if (progress < 1) {
				requestAnimationFrame(animate)
			}
		}

		requestAnimationFrame(animate)
	}
})
