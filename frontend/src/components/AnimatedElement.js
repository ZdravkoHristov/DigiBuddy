import { useState, useEffect } from 'react';

export default function AnimatedElement({
	isMounted,
	inClass = '',
	outClass = '',
	delayTime = 0,
	children = [],
	className = '',
	...rest
}) {
	const [showElement, setShowElement] = useState(false);
	useEffect(() => {
		let timeoutId;
		if (isMounted && !showElement) {
			setShowElement(true);
		} else if (!isMounted && showElement) {
			timeoutId = setTimeout(() => setShowElement(false), delayTime);
		}
		return () => clearTimeout(timeoutId);
	}, [isMounted, delayTime, showElement]);

	return (
		<>
			{showElement && (
				<div className={className + (isMounted ? inClass : outClass)} {...rest}>
					{children}
				</div>
			)}
		</>
	);
}
