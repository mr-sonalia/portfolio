"use client";

import { useEffect, useRef } from "react";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let scroll: any;

		const initLocomotiveScroll = async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;

			if (scrollRef.current) {
				scroll = new LocomotiveScroll({
					el: scrollRef.current,
					smooth: true,
					multiplier: 1,
					class: "is-revealed",
				});

				// Handle anchor link clicks
				const handleAnchorClick = (e: Event) => {
					const target = e.target as HTMLElement;
					const anchor = target.closest('a[href^="#"]');
					
					if (anchor) {
						e.preventDefault();
						const href = anchor.getAttribute('href');
						if (href && href !== '#') {
							const element = document.querySelector(href);
							if (element && scroll) {
								scroll.scrollTo(element, {
									offset: -80,
									duration: 1000,
									easing: [0.25, 0.0, 0.35, 1.0]
								});
							}
						}
					}
				};

				document.addEventListener('click', handleAnchorClick);

				return () => {
					document.removeEventListener('click', handleAnchorClick);
				};
			}
		};

		initLocomotiveScroll();

		return () => {
			if (scroll) scroll.destroy();
		};
	}, []);

	return (
		<div data-scroll-container ref={scrollRef}>
			{children}
		</div>
	);
};
