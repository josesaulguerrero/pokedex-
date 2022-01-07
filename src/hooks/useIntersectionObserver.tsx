// libraries and hooks
import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = () => {
	const elementRef = useRef<Element>();
	const [isVisible, setIsVisible] = useState(false);
	const handleEntries = (entries: IntersectionObserverEntry[]) => {
		if (entries[0].isIntersecting) {
			setIsVisible(true);
		}
	};

	useEffect(() => {
		if (elementRef.current !== null && elementRef.current !== undefined) {
			const Observer = new IntersectionObserver(handleEntries);
			Observer.observe(elementRef.current);
		}
	}, [elementRef]);

	return [elementRef, isVisible];
};
